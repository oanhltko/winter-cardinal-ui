/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DListItem, DListItemOptions, DListItemSelection, DThemeListItem } from "./d-list-item";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DMenuItemExpandableHeaderOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader
> extends DListItemOptions<VALUE, THEME> {

}

export interface DThemeMenuItemExpandableHeader extends DThemeListItem {

}

export class DMenuItemExpandableHeader<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader,
	OPTIONS extends DMenuItemExpandableHeaderOptions<VALUE, THEME> = DMenuItemExpandableHeaderOptions<VALUE, THEME>
> extends DListItem<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );

		this.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			if( this.isActionable() ) {
				this.onSelect( e );
			}
		});
	}

	protected getSelection(): DListItemSelection | null {
		return null;
	}

	protected getType(): string {
		return "DMenuItemExpandableHeader";
	}

	protected onSelect( e: KeyboardEvent | interaction.InteractionEvent ) {
		this.emit( "select", this );
		super.onSelect( e );
	}
}
