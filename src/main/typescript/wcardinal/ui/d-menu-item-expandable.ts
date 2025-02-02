/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBaseStates } from "./d-base-states";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { DMenuItemExpandableBody, DMenuItemExpandableBodyOptions } from "./d-menu-item-expandable-body";
import { DMenuItemExpandableHeader, DMenuItemExpandableHeaderOptions } from "./d-menu-item-expandable-header";
import { DMenuItemExpandables } from "./d-menu-item-expandables";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export interface DMenuItemExpandableOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandable = DThemeMenuItemExpandable,
> extends DLayoutVerticalOptions<THEME> {
	header: DisplayObject | DMenuItemExpandableHeaderOptions<VALUE>;
	body?: Container | DMenuItemExpandableBodyOptions;
	items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>;
	sticky?: boolean;
}

export interface DThemeMenuItemExpandable extends DThemeLayoutVertical {

}

export class DMenuItemExpandable<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandable = DThemeMenuItemExpandable,
	OPTIONS extends DMenuItemExpandableOptions<VALUE, THEME> = DMenuItemExpandableOptions<VALUE, THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected _header!: DisplayObject;
	protected _body!: DisplayObject;

	protected init( options?: OPTIONS ) {
		super.init( options );

		// Header
		const theme = this.theme;
		const header = this.toHeader( theme, options );
		this._header = header;
		header.on( "select", (): void => {
			this.toggle();
		});
		this.addChild( header );

		// Body
		const body = this.toBody( theme, options );
		this._body = body;
		const sticky = ( options && options.sticky != null ? options.sticky : false );
		this.newItems( body, sticky, theme, options );
		this.addChild( body );

		//
		if( this.isActive() ) {
			this.onActivated();
		} else {
			this.onDeactivated();
		}
	}

	protected newItems( body: Container, sticky: boolean, theme: THEME, options: OPTIONS | undefined ): void {
		if( options != null && options.items != null ) {
			DMenuItemExpandables.newItems( body, options.items, sticky );
		}
	}

	protected toHeader( theme: THEME, options?: OPTIONS ): DisplayObject {
		if( options ) {
			if( options.header instanceof DisplayObject ) {
				return options.header;
			} else {
				return this.newHeader( theme, options.header );
			}
		}
		return this.newHeader( theme );
	}

	protected newHeader( theme: THEME, options?: DMenuItemExpandableHeaderOptions<VALUE> ): DisplayObject {
		return new DMenuItemExpandableHeader<VALUE>( options );
	}

	protected toBody( theme: THEME,  options?: OPTIONS ): Container {
		if( options && options.body ) {
			if( options.body instanceof DisplayObject ) {
				return options.body;
			} else {
				return this.newBody( theme, options.body );
			}
		}
		return this.newBody( theme );
	}

	protected newBody( theme: THEME, options?: DMenuItemExpandableBodyOptions ): Container {
		return new DMenuItemExpandableBody( options );
	}

	open(): void {
		this.setActive( true );
	}

	close(): void {
		this.setActive( false );
	}

	toggle(): void {
		this.setActive( ! this.isActive() );
	}

	protected onActivated(): void {
		const body = this._body;
		if( body instanceof DBase ) {
			body.show();
		} else {
			body.visible = true;
		}
	}

	protected onDeactivated(): void {
		const body = this._body;
		if( body instanceof DBase ) {
			body.hide();
		} else {
			body.visible = false;
		}
	}

	protected onStateChange( newState: DBaseState, oldState: DBaseState ): void {
		super.onStateChange( newState, oldState );

		if( DBaseStates.isActive( newState ) ) {
			if( ! DBaseStates.isActive( oldState ) ) {
				this.onActivated();
			}
		} else {
			if( DBaseStates.isActive( oldState ) ) {
				this.onDeactivated();
			}
		}
	}

	protected getType(): string {
		return "DMenuItemExpandable";
	}

	static isCompatible<VALUE>( options: DMenuItemOptionsUnion<VALUE> ): options is DMenuItemExpandableOptions<VALUE> {
		return "header" in options;
	}
}
