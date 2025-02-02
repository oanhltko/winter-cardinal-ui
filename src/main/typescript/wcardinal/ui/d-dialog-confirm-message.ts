/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DDialogConfirmMessageOptions<
	VALUE = unknown,
	THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage
> extends DImageOptions<VALUE, THEME> {

}

export interface DThemeDialogConfirmMessage extends DThemeImage {

}

export class DDialogConfirmMessage<
	VALUE = unknown,
	THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage,
	OPTIONS extends DDialogConfirmMessageOptions<VALUE, THEME> = DDialogConfirmMessageOptions<VALUE, THEME>
> extends DImage<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );
		this.setState( DBaseState.UNFOCUSABLE, true );
	}

	protected getType(): string {
		return "DDialogConfirmMessage";
	}
}
