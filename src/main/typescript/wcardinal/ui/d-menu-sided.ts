/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase, DBaseOptions } from "./d-base";
import { DMenuContext } from "./d-menu-context";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuSidedContent, DMenuSidedContentOptions } from "./d-menu-sided-content";
import { DMenuSidedSelection, DMenuSidedSelectionOptions } from "./d-menu-sided-selection";
import { DMenuSideds } from "./d-menu-sideds";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { DMenuCloseable } from "./d-menu-closeable";

export interface DMenuSidedOptions<
	VALUE = unknown,
	THEME extends DThemeMenuSided = DThemeMenuSided,
	CONTENT_OPTIONS extends DBaseOptions = DMenuSidedContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>;
	sticky?: boolean;
	selection?: DMenuSidedSelectionOptions | DMenuSidedSelection<VALUE>;
}

export interface DThemeMenuSided extends DThemePane {}

export class DMenuSided<
	VALUE = unknown,
	THEME extends DThemeMenuSided = DThemeMenuSided,
	CONTENT_OPTIONS extends DMenuSidedContentOptions = DMenuSidedContentOptions,
	OPTIONS extends DMenuSidedOptions<VALUE, THEME, CONTENT_OPTIONS> = DMenuSidedOptions<
		VALUE,
		THEME,
		CONTENT_OPTIONS
	>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _context: DMenuContext | null;
	protected _selection: DMenuSidedSelection<VALUE>;

	constructor(options?: OPTIONS) {
		super(options);

		const context = new DMenuContext(this);
		this._context = context;
		context.add(this);

		const items = options?.items;
		if (items != null) {
			const sticky = options?.sticky ?? false;
			this.newItems(items, sticky);
		}

		const selection = options?.selection;
		this._selection =
			selection instanceof DMenuSidedSelection ? selection : this.newSelection(selection);
	}

	protected newSelection(options?: DMenuSidedSelectionOptions): DMenuSidedSelection<VALUE> {
		return new DMenuSidedSelection<VALUE>(this.content, options);
	}

	protected onHierarchyDirty(): void {
		const selection = this._selection;
		if (selection != null) {
			selection.toDirty();
		}
		super.onHierarchyDirty();
	}

	protected newItems(
		items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>,
		sticky: boolean
	): void {
		DMenuSideds.newItems(this.content, items, sticky);
	}

	protected newContent(options?: CONTENT_OPTIONS): DBase {
		return new DMenuSidedContent(options);
	}

	get selection(): DMenuSidedSelection<VALUE> {
		return this._selection;
	}

	getContext(): DMenuContext | null {
		return this._context;
	}

	getCloseable(): DMenuCloseable | null {
		return this;
	}

	open(): void {
		// DO NOTHING
	}

	close(): void {
		// DO NOTHING
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		UtilKeyboardEvent.moveFocusVertically(e, this);
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DMenuSided";
	}
}
