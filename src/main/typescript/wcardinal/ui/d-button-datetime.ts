/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDatetime, DDialogDatetimeOptions } from "./d-dialog-datetime";
import { DDialogDatetimes } from "./d-dialog-datetimes";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimes } from "./d-picker-datetimes";

export interface DButtonDatetimeOptions<
	THEME extends DThemeButtonDatetime = DThemeButtonDatetime
> extends DButtonOptions<Date, THEME> {
	dialog?: DDialogDatetimeOptions;
}

export interface DThemeButtonDatetime extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DButtonDatetime ) => string;
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

export class DButtonDatetime<
	THEME extends DThemeButtonDatetime = DThemeButtonDatetime,
	OPTIONS extends DButtonDatetimeOptions<THEME> = DButtonDatetimeOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogDatetime;
	protected _dialogOptions?: DDialogDatetimeOptions;
	protected _datetimeMask!: DPickerDatetimeMask;

	protected init( options?: OPTIONS ) {
		this._dialogOptions = options && options.dialog;
		this._datetimeMask = DPickerDatetimes.toMask( options && options.dialog && options.dialog.picker );

		super.init( options );

		this.on( "active", (): void => {
			const currentTime = this._textValueComputed.getTime();
			const dialog = this.dialog;
			dialog.current = new Date( currentTime );
			dialog.new = new Date( currentTime );
			dialog.page = new Date( currentTime );
			dialog.open().then((): void => {
				const dateNew = dialog.new;
				const dateCurrent = dialog.current;
				this.emit( "select", dateNew, dateCurrent, this );
				this.text = new Date( dateNew.getTime() );
				this.emit( "change", this );
			});
		});
	}

	getDatetimeMask(): DPickerDatetimeMask {
		return this._datetimeMask;
	}

	get dialog(): DDialogDatetime {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogDatetime( this._dialogOptions );
			} else {
				dialog = DDialogDatetimes.getInstance();
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): Date {
		return this._textValueComputed;
	}

	set value( value: Date ) {
		if( this._textValueComputed.getTime() !== value.getTime() ) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonDatetime";
	}
}
