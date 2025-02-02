/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogColor } from "../theme/white/d-theme-white-dialog-color";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";

export const loadThemeWhiteDialogColor = () => {
	DThemeWhite.set( "DDialogColor", DThemeWhiteDialogColor );
	loadThemeWhitePickerColor();
};
