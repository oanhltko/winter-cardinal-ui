/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DMenuOptions } from "../../d-menu";
import { DMenuItemLinkMenuItemId, DThemeMenuItemLink } from "../../d-menu-item-link";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";

DThemeWhiteAtlas.add( "menu_item_mark_link", 24, 24,
	`<g>` +
		`<path fill="none" stroke="#fff" stroke-width="1" ` +
			`d="M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8" />` +
	`</g>`
);

export class DThemeWhiteMenuItemLink extends DThemeWhiteMenuItemText implements DThemeMenuItemLink {
	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( state & DBaseState.EXTENSION_0 ) {
			return DThemeWhiteAtlas.mappings.menu_item_mark_link;
		}
		return null;
	}

	getImageTintAlpha( state: DBaseState ): number {
		if( state & DBaseState.HOVERED ) {
			return super.getImageTintAlpha( state );
		}
		return 0;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getMenuOptions(): DMenuOptions<DMenuItemLinkMenuItemId> {
		return {
			sticky: true,
			fit: true,
			items: [{
				value: DMenuItemLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW,
				text: {
					value: this.getOpenLinkInNewWindow()
				}
			}, {
				value: DMenuItemLinkMenuItemId.COPY_LINK_ADDRESS,
				text: {
					value: this.getCopyLinkAddress()
				}
			}]
		};
	}

	getOpenLinkInNewWindow(): string {
		return "Open link in new window";
	}

	getCopyLinkAddress(): string {
		return "Copy link address";
	}
}
