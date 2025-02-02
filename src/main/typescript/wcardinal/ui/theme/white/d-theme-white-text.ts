/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteText extends DThemeWhiteTextBase {
	getHeight(): DCoordinate {
		return this.getLineHeight();
	}
}
