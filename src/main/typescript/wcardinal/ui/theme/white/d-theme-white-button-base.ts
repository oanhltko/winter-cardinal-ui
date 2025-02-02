/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonBase } from "../../d-button-base";
import { DCoordinate } from "../../d-coordinate";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

export class DThemeWhiteButtonBase extends DThemeWhiteImageBase implements DThemeButtonBase {
	COLOR = 0xffffff;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, 0.017 );
	COLOR_PRESSED = UtilRgb.darken( this.COLOR, 0.034 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isPressed( state ) ) {
			return this.COLOR_PRESSED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return this.COLOR;
		}
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) || ! DBaseStates.isActive( state ) ) {
			return super.getColor( state );
		} else {
			return 0xffffff;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || ! DBaseStates.isActive( state ) ) {
			return 0xe5e5e5;
		} else {
			return null;
		}
	}

	getHeight(): DCoordinate {
		return 30;
	}

	getWidth(): DCoordinate {
		return 100;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	isToggle(): boolean {
		return false;
	}
}
