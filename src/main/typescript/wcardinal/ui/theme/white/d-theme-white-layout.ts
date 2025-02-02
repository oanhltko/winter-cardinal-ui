/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DLayoutDirection, DThemeLayout } from "../../d-layout";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteLayout extends DThemeWhiteBase implements DThemeLayout {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getMargin(): number {
		return 5;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	getDirection(): DLayoutDirection {
		return DLayoutDirection.VERTICAL;
	}

	getCornerAdjust(): boolean {
		return false;
	}

	getMultiplicity(): number {
		return 1;
	}
}
