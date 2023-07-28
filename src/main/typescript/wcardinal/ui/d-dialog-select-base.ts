/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import {
	DDialogLayered,
	DDialogLayeredEvents,
	DDialogLayeredOptions,
	DThemeDialogLayered
} from "./d-dialog-layered";
import { DDialogSelectList, DDialogSelectListOptions } from "./d-dialog-select-list";
import { DInputSearch, DInputSearchOptions } from "./d-input-search";
import { DLayoutHorizontal, DLayoutHorizontalOptions } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DListOptions } from "./d-list";
import { DListDataSelection } from "./d-list-data-selection";
import { DNote, DNoteOptions } from "./d-note";
import { DNoteSmallError } from "./d-note-small-error";
import { DNoteSmallNoItemsFound } from "./d-note-small-no-items-found";
import { DNoteSmallSearching } from "./d-note-small-searching";
import { DOnOptions } from "./d-on-options";
import { DDialogSelectSearhDismissableOptions } from "./d-dialog-select-search-dismissable";

export interface DDialogSelectInputOpitons extends DInputSearchOptions {
	margin?: number;
}

/**
 * {@link DDialogSelectBase} note options.
 */
export interface DDialogSelectNoteOptions {
	error?: DNoteOptions | null;
	noItemsFound?: DNoteOptions | null;
	searching?: DNoteOptions | null;
}

export type DDialogSelectItemToLabel<VALUE> = (result: VALUE, caller: any) => string;

export type DDialogSelectItemIsEqual<VALUE> = (a: VALUE, b: VALUE, caller: any) => boolean;

/**
 * {@link DDialogSelectBase} events.
 */
export interface DDialogSelectEvents<VALUE, EMITTER> extends DDialogLayeredEvents<VALUE, EMITTER> {
	select(value: VALUE, self: EMITTER): void;
}

/**
 * {@link DDialogSelectBase} "on" options.
 */
export interface DDialogSelectOnOptions<VALUE, EMITTER>
	extends Partial<DDialogSelectEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDialogSelectBase} options.
 */
export interface DDialogSelectBaseOptions<
	VALUE,
	THEME extends DThemeDialogSelectBase<VALUE> = DThemeDialogSelectBase<VALUE>,
	EMITTER = any
> extends DDialogLayeredOptions<VALUE, THEME> {
	dismiss?: DDialogSelectSearhDismissableOptions<VALUE>;
	input?: DDialogSelectInputOpitons;
	list?: DListOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogSelectBase} theme.
 */
export interface DThemeDialogSelectBase<VALUE = unknown> extends DThemeDialogLayered {
	getInputMargin(): number;
}

export class DDialogSelectBase<
	VALUE = unknown,
	THEME extends DThemeDialogSelectBase<VALUE> = DThemeDialogSelectBase<VALUE>,
	OPTIONS extends DDialogSelectBaseOptions<VALUE, THEME> = DDialogSelectBaseOptions<VALUE, THEME>
> extends DDialogLayered<VALUE | null, THEME, OPTIONS> {
	protected _value: VALUE | null;
	protected _input?: DInputSearch;
	protected _inputLayout?: DLayoutHorizontal;
	protected _list?: DDialogSelectList<VALUE>;
	protected _noteError?: DNote | null;
	protected _noteNoItemsFound?: DNote | null;
	protected _noteSearching?: DNote | null;

	constructor(options?: OPTIONS) {
		super(options);

		this._value = null;
	}

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		const result = super.newContentChildren(theme, options);
		result.push(this.inputLayout, this.list);
		return result;
	}

	protected get inputLayout(): DLayoutHorizontal {
		let result = this._inputLayout;
		if (result == null) {
			result = this.newInputLayout(this.input, this.theme, this._options);
			this._inputLayout = result;
		}
		return result;
	}

	protected newInputLayout(
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontal {
		return new DLayoutHorizontal(this.toInputLayoutOptions(input, theme, options));
	}

	protected toInputLayoutOptions(
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontalOptions {
		const margin = this.toInputMargin(theme, options);
		return {
			width: "padding",
			height: "auto",
			children: [
				new DLayoutSpace({ width: margin }),
				input,
				new DLayoutSpace({ width: margin })
			]
		};
	}

	get input(): DInputSearch {
		let result = this._input;
		if (result == null) {
			result = this.newInput();
			this._input = result;
		}
		return result;
	}

	protected newInput(): DInputSearch {
		const result = new DInputSearch(this.toInputOptions(this.theme, this._options));
		return result;
	}

	protected toInputOptions(theme: THEME, options?: OPTIONS): DInputSearchOptions {
		const result = options?.input || {};
		if (result.width === undefined && result.weight === undefined) {
			result.weight = 1;
		}
		return result;
	}

	protected toInputMargin(theme: THEME, options?: OPTIONS): number {
		return options?.input?.margin ?? theme.getInputMargin();
	}

	get list(): DDialogSelectList<VALUE> {
		let result = this._list;
		if (result == null) {
			result = this.newList();
			this._list = result;
		}
		return result;
	}

	protected newList(): DDialogSelectList<VALUE> {
		const result = new DDialogSelectList<VALUE>(this.toListOptions(this.theme, this._options));
		result.selection.on("change", (selection: DListDataSelection<VALUE>): void => {
			this.onListSelectionChange(selection);
		});
		return result;
	}

	protected onListSelectionChange(selection: DListDataSelection<VALUE>): void {
		let selected = selection.first;
		if (selected == null) {
			return;
		}
		const options = this._options;
		if (options) {
			const dismiss = options.dismiss;
			if (dismiss) {
				if (selected === dismiss.value) {
					selected = null;
				}
			}
		}
		this._value = selected;
		this.onOk(selected);
	}

	protected toListOptions(theme: THEME, options?: OPTIONS): DDialogSelectListOptions<VALUE> {
		const result = options?.list || {};
		if (result.width === undefined) {
			result.width = "padding";
		}
		return result;
	}

	protected get noteError(): DNote | null {
		let result = this._noteError;
		if (result == null) {
			result = this.newNoteError();
			this._noteError = result;
		}
		return result;
	}

	protected newNoteError(): DNote | null {
		const error = this._options?.note?.error;
		if (error !== null) {
			return new DNoteSmallError(this.toNoteOptions(this.list, error));
		}
		return null;
	}

	protected get noteNoItemsFound(): DNote | null {
		let result = this._noteNoItemsFound;
		if (result == null) {
			result = this.newNoteNoItemsFound();
			this._noteNoItemsFound = result;
		}
		return result;
	}

	protected newNoteNoItemsFound(): DNote | null {
		const noItemsFound = this._options?.note?.noItemsFound;
		if (noItemsFound !== null) {
			return new DNoteSmallNoItemsFound(this.toNoteOptions(this.list, noItemsFound));
		}
		return null;
	}

	protected get noteSearching(): DNote | null {
		let result = this._noteSearching;
		if (result == null) {
			result = this.newNoteSearching();
			this._noteSearching = result;
		}
		return result;
	}

	protected newNoteSearching(): DNote | null {
		const searching = this._options?.note?.searching;
		// Because the `searching` note is disabled by default,
		// if options.searching is missing, i.e., if its value is undefined,
		// this method returns null. This is why `!=` is used here instead of `!==`.
		if (searching != null) {
			return new DNoteSmallSearching(this.toNoteOptions(this.list, searching));
		}
		return null;
	}

	protected toNoteOptions(parent: DBase, options?: DNoteOptions): DNoteOptions {
		if (options != null) {
			if (options.parent == null) {
				options.parent = parent;
			}
			if (options.visible == null) {
				options.visible = false;
			}
			return options;
		}
		return {
			parent,
			visible: false
		};
	}

	get value(): VALUE | null {
		return this._value;
	}

	protected onSearched(results: VALUE[]): void {
		this.list.data.items = results;
	}

	protected getResolvedValue(): VALUE | null | PromiseLike<VALUE | null> {
		return this._value;
	}

	protected getType(): string {
		return "DDialogSelect";
	}

	protected onOpen(): void {
		super.onOpen();
	}

	protected onOk(value: VALUE | null | PromiseLike<VALUE | null>): void {
		this.emit("select", value, this);
		super.onOk(value);
	}

	destroy(): void {
		const input = this._input;
		if (input) {
			input.destroy();
		}
		const noteError = this._noteError;
		if (noteError) {
			noteError.destroy();
		}
		const noteNoItemsFound = this._noteNoItemsFound;
		if (noteNoItemsFound) {
			noteNoItemsFound?.destroy();
		}
		const noteSearching = this._noteSearching;
		if (noteSearching) {
			noteSearching?.destroy();
		}
		const list = this._list;
		if (list) {
			list.destroy();
		}
		super.destroy();
	}
}
