/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTableBody } from "../../d-table-body";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteTableBody extends DThemeWhitePane implements DThemeTableBody {
	getWidth(): DCoordinate {
		return "100%";
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.TOP;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getRowHeight(): number {
		return 30;
	}
}
