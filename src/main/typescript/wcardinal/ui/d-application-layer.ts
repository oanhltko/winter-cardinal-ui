/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Application, interaction, Point } from "pixi.js";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplicationLayerOptions } from "./d-application-layer-options";
import { DApplicationLike } from "./d-application-like";
import { DBase } from "./d-base";
import { DControllerDefaultFocus } from "./d-controller-default-focus";
import { DControllerFocus, DFocusable, DFocusableContainer } from "./d-controller-focus";
import { DControllers } from "./d-controllers";
import { DPadding } from "./d-padding";
import { DynamicFontAtlases } from "./util/dynamic-font-atlases";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEvent, UtilWheelEventDeltas } from "./util/util-wheel-event";

interface DblClickable {
	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean;
}

const isDblClickable = ( target: any ): target is DblClickable => {
	return target != null && target.onDblClick != null;
};

interface Wheelable {
	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean;
}

const isWheelable = ( target: any ): target is Wheelable => {
	return target != null && target.onWheel != null;
};

export class DApplicationLayer extends Application implements DApplicationLayerLike {
	protected _options: DApplicationLayerOptions;
	protected _renderId: number | null = null;
	protected _renderBound: () => void;
	protected _isUpdateAllowed: boolean;
	protected _refitLimit: number;
	protected _reflowLimit: number;
	protected _focus?: DControllerFocus;
	protected _elementContainer: HTMLDivElement;
	protected _dynamicFontAtlases: DynamicFontAtlases | null = null;
	protected _isVisible: boolean;

	readonly application: DApplicationLike;

	constructor( application: DApplicationLike, options: DApplicationLayerOptions ) {
		super( options.getPixiApplicationOptions() );

		this.application = application;
		const stageAny = this.stage as any;
		stageAny.layer = this;
		stageAny.application = application;

		this._options = options;
		this._isUpdateAllowed = true;
		this._refitLimit = 5;
		this._reflowLimit = 5;
		this._isVisible = true;

		this._renderBound = (): void => {
			if( this._renderId != null ) {
				this.render();
			}
		};

		// Canvas initialization
		const rootElement = options.getRootElement();
		const elementContainer = document.createElement( "div" );
		elementContainer.setAttribute( "style",
			"position: absolute; top: 0; left: 0; width: 0; height: 0;" +
			"margin: 0; padding: 0; outline: none;"
		);
		this._elementContainer = elementContainer;
		const children = rootElement.children;
		if( options.isOverlay() ) {
			if( 3 <= children.length ) {
				const thirdChild = children[ 2 ];
				rootElement.insertBefore( this.view, thirdChild );
				rootElement.insertBefore( elementContainer, thirdChild );
			} else {
				rootElement.appendChild( this.view );
				rootElement.appendChild( elementContainer );
			}

			const oldOnChildrenChange = stageAny.onChildrenChange;
			stageAny.onChildrenChange = () => {
				this.updateVisibility();
				oldOnChildrenChange.call( stageAny );
			};
		} else {
			if( 0 < children.length ) {
				const firstChild = children[ 0 ];
				rootElement.insertBefore( this.view, firstChild );
				rootElement.insertBefore( elementContainer, firstChild );
			} else {
				rootElement.appendChild( this.view );
				rootElement.appendChild( elementContainer );
			}
		}
		const rootElementStyle = rootElement.style;
		if( rootElement !== document.body ) {
			const rootElementStylePosition = window.getComputedStyle( rootElement ).position;
			if( rootElementStylePosition === "static" ) {
				rootElementStyle.position = "relative";
			}
		}
		rootElementStyle.margin = "0";
		rootElementStyle.padding = "0";
		rootElementStyle.overflow = "hidden";
		const viewStyle = this.view.style;
		viewStyle.position = "absolute";
		viewStyle.top = "0";
		viewStyle.left = "0";
		viewStyle.width = "100%";
		viewStyle.height = "100%";
		viewStyle.display = "block";
		viewStyle.outline = "none";

		// Focus handling
		let hasFocus = false;
		const focusController = this.getFocusController();
		const onBlurBound = (): void => {
			if( ! hasFocus ) {
				focusController.setFocused( null, true, false );
			}
		};
		rootElement.addEventListener( "focus", ( e ): void => {
			hasFocus = true;
		}, true );
		rootElement.addEventListener( "blur", ( e ): void => {
			hasFocus = false;
			setTimeout( onBlurBound, 0 );
		}, true );
		this.view.setAttribute( "tabindex", "0" );

		DControllers.getKeyboardController().init( this.view, this.stage, focusController );

		const interactionManager: interaction.InteractionManager = this.renderer.plugins.interaction;
		interactionManager.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			if( e.target == null ) {
				focusController.setFocused( null, true, false );
			}
		});

		// Resize handling
		const onResize = (): void => {
			const bbox = options.getRootElement().getBoundingClientRect();
			this.renderer.resize( bbox.width, bbox.height );
			this.resizeChildren( bbox.width, bbox.height, options.getPadding() );
			this.update();
		};
		window.addEventListener( "resize", onResize );
		window.addEventListener( "orientationchange", onResize );

		// Mouse wheel handling
		const wheelGlobal = new Point();
		const wheelEventUtil = UtilWheelEvent.getInstance();
		wheelEventUtil.on( this.view, ( e: WheelEvent | Event ): void => {
			const wheelEvent = e as WheelEvent;
			UtilPointerEvent.toGlobal( wheelEvent, interactionManager, wheelGlobal );
			let current = interactionManager.hitTest( wheelGlobal );
			const deltas = wheelEventUtil.normalize( e );
			if( deltas != null ) {
				while( current != null ) {
					if( isWheelable( current ) ) {
						if( current.onWheel( wheelEvent, deltas, wheelGlobal ) ) {
							wheelEvent.preventDefault();
							break;
						}
					}
					current = current.parent;
				}
			}
		});

		// Double click handling
		UtilPointerEvent.onDblClick( this.view, ( e: MouseEvent | TouchEvent ) => {
			const focused = focusController.getFocused();
			if( focused != null ) {
				let current: DFocusable | DFocusableContainer | null = focused;
				while( current != null ) {
					if( isDblClickable( current ) ) {
						if( current.onDblClick( e, interactionManager ) ) {
							break;
						}
					}
					current = current.parent;
				}
			}
		});

		//
		this.stage.interactive = true;
	}

	disallowUpdate(): void {
		this._isUpdateAllowed = false;
	}

	allowUpdate(): void {
		this._isUpdateAllowed = true;
	}

	update(): void {
		if( this._isUpdateAllowed && this._renderId == null ) {
			this._renderId = requestAnimationFrame( this._renderBound );
		}
	}

	protected updateVisibility(): void {
		if( this._options.isOverlay() ) {
			if( 0 < this.stage.children.length ) {
				if( ! this._isVisible ) {
					this._isVisible = true;
					this.view.style.display = "block";
				}
			} else {
				if( this._isVisible ) {
					this._isVisible = false;
					this.view.style.display = "none";
				}
			}
		}
	}

	render(): void {
		this.refit();
		this.reflow();

		// Please note why the following line is here.
		//
		// Before this line, the update method does not enque a rendering task
		// because `this._renderId` is not null. As a result, this prevents
		// an unintentional rendering loop caused by the refit or the reflow.
		//
		// After this line, the update method enques a rendering task.
		// Namely, in the DisplayObject#render(Renderer) method, allowed to enque
		// a rendering task. For instance, please refer to the DDiagramShape#update().
		this._renderId = null;

		// Render
		super.render();
	}

	get width(): number {
		return this.screen.width;
	}

	get height(): number {
		return this.screen.height;
	}

	get padding(): DPadding {
		return this._options.getPadding();
	}

	protected resizeChildren( width: number, height: number, padding: DPadding ): void {
		const children = this.stage.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DBase ) {
				child.onParentResize( width, height, padding );
			}
		}
	}

	refit(): void {
		const children = this.stage.children;
		for( let ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit ) {
			let isChildrenDirty = false;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.refit();
					isChildrenDirty = isChildrenDirty || child.isChildrenDirty();
				}
			}

			// If DBases are changed during the `refit` process, need to refit again.
			if( ! isChildrenDirty ) {
				break;
			}
		}
	}

	reflow(): void {
		const children = this.stage.children;
		for( let ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit ) {
			let isDirty = false;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.reflow();
					isDirty = isDirty || child.isDirty() || child.hasDirty();
				}
			}

			// If DBases are changed during the `reflow` process, need to reflow again.
			if( ! isDirty ) {
				break;
			}
		}
	}

	getFocusController(): DControllerFocus {
		if( this._focus == null ) {
			this._focus = new DControllerDefaultFocus();
		}
		return this._focus;
	}

	getElementContainer(): HTMLElement {
		return this._elementContainer;
	}

	getDynamicFontAtlases(): DynamicFontAtlases {
		if( this._dynamicFontAtlases == null ) {
			this._dynamicFontAtlases = new DynamicFontAtlases( this );
		}
		return this._dynamicFontAtlases;
	}
}
