/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogConfirm } from "../../d-dialog-confirm";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogLayered } from "./d-theme-white-dialog-layered";

export abstract class DThemeWhiteDialogConfirm
	extends DThemeWhiteDialogLayered
	implements DThemeDialogConfirm
{
	abstract getFooter(): DDialogLayeredFooterOptions | undefined | null;

	getMessage(): DStateAwareOrValue<string> {
		return "";
	}
}
