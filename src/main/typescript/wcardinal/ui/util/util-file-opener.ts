/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum UtilFileAs {
	TEXT,
	DATA_URL,
	BINARY_STRING,
	ARRAY_BUTTER
}

export interface UtilFileFacade {
	emit( name: string, ...args: any[] ): void;
}

export class UtilFileOpener {
	protected _input: HTMLInputElement | null;
	protected _as: UtilFileAs;
	protected _facade: UtilFileFacade;

	constructor( as: UtilFileAs, facade: UtilFileFacade ) {
		this._input = null;
		this._as = as;
		this._facade = facade;
	}

	open() {
		const input = this.getOrCreateInput();
		if( input != null ) {
			input.click();
		} else {
			this.onCancel();
		}
	}

	protected getOrCreateInput(): HTMLInputElement | null {
		if( "FileReader" in window && this._input == null ) {
			const input = this._input = document.createElement( "input" );
			input.setAttribute( "type", "file" );
			input.setAttribute( "style", "display:none" );
			input.addEventListener( "change", ( e: Event ): void => {
				this.onInputChange( input );
				input.value = "";
				e.stopImmediatePropagation();
				e.preventDefault();
			});
			document.body.appendChild( input );
		}
		return this._input;
	}

	protected onInputChange( input: HTMLInputElement ) {
		const files = input.files;
		if( files != null && 0 < files.length ) {
			const file = files[ 0 ];
			const fileReader = new FileReader();
			fileReader.onload = ( e: ProgressEvent ) => {
				if( e.target != null ) {
					const target = e.target as any;
					this.onOpen( target.result );
				}
			};
			fileReader.onabort = ( e: ProgressEvent ) => {
				this.onAboart( e );
			};
			switch( this._as ) {
			case UtilFileAs.TEXT:
				fileReader.readAsText( file );
				break;
			case UtilFileAs.DATA_URL:
				fileReader.readAsDataURL( file );
				break;
			case UtilFileAs.BINARY_STRING:
				fileReader.readAsBinaryString( file );
				break;
			case UtilFileAs.ARRAY_BUTTER:
				fileReader.readAsArrayBuffer( file );
				break;
			default:
				fileReader.readAsText( file );
				break;
			}
		} else {
			this.onCancel();
		}
	}

	protected onOpen( result: unknown ): void {
		const facade = this._facade;
		facade.emit( "open", result, facade );
	}

	protected onAboart( e: ProgressEvent ): void {
		const facade = this._facade;
		facade.emit( "abort", e, facade );
	}

	protected onCancel(): void {
		const facade = this._facade;
		facade.emit( "cancel", facade );
	}
}
