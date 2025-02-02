/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";
import { DListItemSeparatorReflowable } from "./d-list-item-separator-reflowable";

export interface DListItemSeparatorOptions<VALUE, THEME extends DThemeListItemSeparator>
	extends DListItemOptions<VALUE, THEME> {
	separator?: true;
}

export interface DThemeListItemSeparator extends DThemeListItem {

}

export class DListItemSeparator<
	VALUE,
	THEME extends DThemeListItemSeparator = DThemeListItemSeparator,
	OPTIONS extends DListItemSeparatorOptions<VALUE, THEME> = DListItemSeparatorOptions<VALUE, THEME>
> extends DListItem<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
		this.interactive = false;
		this.buttonMode = false;
		this.setState( DBaseState.UNFOCUSABLE, true );
	}

	protected initReflowable(): void {
		new DListItemSeparatorReflowable( this );
	}

	protected getType(): string {
		return "DListItemSeparator";
	}
}
