/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";

export interface DMenuSidedContentOptions<
	THEME extends DThemeMenuSidedContent = DThemeMenuSidedContent
> extends DLayoutVerticalOptions<THEME> {

}

export interface DThemeMenuSidedContent extends DThemeLayoutVertical {

}

export class DMenuSidedContent<
	THEME extends DThemeMenuSidedContent = DThemeMenuSidedContent,
	OPTIONS extends DMenuSidedContentOptions<THEME> = DMenuSidedContentOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );
	}

	protected initReflowable(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DMenuSidedContent";
	}
}
