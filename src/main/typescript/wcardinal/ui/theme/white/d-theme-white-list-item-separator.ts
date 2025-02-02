/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteListItemSeparator extends DThemeWhiteImage implements DThemeListItemSeparator {
	getBorderColor( state: DBaseState ): number | null {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getBorderAlpha( state: DBaseState ): number {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	getHeight(): DCoordinate {
		return 15;
	}

	getWidth(): DCoordinate {
		return "padding";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}
}
