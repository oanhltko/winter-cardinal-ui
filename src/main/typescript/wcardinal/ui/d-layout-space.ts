/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";

export interface DLayoutSpaceOptions<THEME extends DThemeLayoutSpace = DThemeLayoutSpace> extends DBaseOptions<THEME> {

}

export interface DThemeLayoutSpace extends DThemeBase {

}

export class DLayoutSpace<
	THEME extends DThemeLayoutSpace = DThemeLayoutSpace,
	OPTIONS extends DLayoutSpaceOptions<THEME> = DLayoutSpaceOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );
		this.visible = false;
		this.setState( DBaseState.UNFOCUSABLE, true );
	}

	protected getType(): string {
		return "DLayoutSpace";
	}
}
