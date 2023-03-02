/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputTreeMarker } from "../../d-table-body-cell-input-tree-marker";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

export class DThemeWhiteTableBodyCellInputTreeMarker<VALUE = unknown>
	extends DThemeWhiteButtonBase<VALUE>
	implements DThemeTableBodyCellInputTreeMarker<VALUE>
{
	getX(): DCoordinatePosition {
		return "padding";
	}

	getY(): DCoordinatePosition {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeWhiteTableBodyCells.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getAlpha(state);
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTableBodyCells.getCornerMask();
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellTrees.getImageSource(state);
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this.getColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this.getAlpha(state) * 0.5;
	}
}
