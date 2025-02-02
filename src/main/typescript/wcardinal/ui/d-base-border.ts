/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBorderMask, DBorderStateAware } from "./d-border";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { utilIsFunction } from "./util/util-is-function";
import { utilIsString } from "./util/util-is-string";

type Callback = () => void;

export class DBaseBorder implements DBorderStateAware {
	protected _theme: DThemeBase;
	protected _color?: DStateAwareOrValueMightBe<number | null>;
	protected _alpha?: DStateAwareOrValueMightBe<number>;
	protected _width?: DStateAwareOrValueMightBe<number>;
	protected _align?: DStateAwareOrValueMightBe<number>;
	protected _mask?: DStateAwareOrValueMightBe<DBorderMask>;
	protected _callback: Callback | undefined;

	constructor( theme: DThemeBase, options?: DBaseOptions<any>, callback?: Callback ) {
		this._theme = theme;
		this._callback = callback;
		if( options != null && options.border != null ) {
			const border = options.border;
			this._color = border.color;
			this._alpha = border.alpha;
			this._width = border.width;
			this._align = border.align;
			this._mask = ( utilIsString( border.mask ) ? DBorderMask[ border.mask ] : border.mask );
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme( theme: DThemeBase ): void {
		this._theme = theme;
	}

	getColor( state: DBaseState ): number | null {
		const color = this._color;
		if( color !== undefined ) {
			if( utilIsFunction( color ) ) {
				const result = color( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return color;
			}
		}
		return this._theme.getBorderColor( state );
	}

	get color(): DStateAwareOrValueMightBe<number | null> {
		return this._color;
	}

	set color( color: DStateAwareOrValueMightBe<number | null> ) {
		if( this._color !== color ) {
			this._color = color;
			this.onChange();
		}
	}

	getAlpha( state: DBaseState ): number {
		const alpha = this._alpha;
		if( alpha !== undefined ) {
			if( utilIsFunction( alpha ) ) {
				const result = alpha( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return alpha;
			}
		}
		return this._theme.getBorderAlpha( state );
	}

	get alpha(): DStateAwareOrValueMightBe<number> {
		return this._alpha;
	}

	set alpha( alpha: DStateAwareOrValueMightBe<number> ) {
		if( this._alpha !== alpha ) {
			this._alpha = alpha;
			this.onChange();
		}
	}

	getWidth( state: DBaseState ): number {
		const width = this._width;
		if( width !== undefined ) {
			if( utilIsFunction( width ) ) {
				const result = width( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return width;
			}
		}
		return this._theme.getBorderWidth( state );
	}

	get width(): DStateAwareOrValueMightBe<number> {
		return this._width;
	}

	set width( width: DStateAwareOrValueMightBe<number> ) {
		if( this._width !== width ) {
			this._width = width;
			this.onChange();
		}
	}

	getAlign( state: DBaseState ): number {
		const align = this._align;
		if( align !== undefined ) {
			if( utilIsFunction( align ) ) {
				const result = align( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return align;
			}
		}
		return this._theme.getBorderAlign( state );
	}

	get align(): DStateAwareOrValueMightBe<number> {
		return this._align;
	}

	set align( align: DStateAwareOrValueMightBe<number> ) {
		if( this._align !== align ) {
			this._align = align;
			this.onChange();
		}
	}

	getMask( state: DBaseState ): number {
		const mask = this._mask;
		if( mask !== undefined ) {
			if( utilIsFunction( mask ) ) {
				const result = mask( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return mask;
			}
		}
		return this._theme.getBorderMask( state );
	}

	get mask(): DStateAwareOrValueMightBe<DBorderMask> {
		return this._mask;
	}

	set mask( mask: DStateAwareOrValueMightBe<DBorderMask> ) {
		if( this._mask !== mask ) {
			this._mask = mask;
			this.onChange();
		}
	}

	protected onChange(): void {
		const callback = this._callback;
		if( callback != null ) {
			callback();
		}
	}
}
