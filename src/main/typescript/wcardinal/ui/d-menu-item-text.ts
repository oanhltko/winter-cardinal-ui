/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Text } from "pixi.js";
import { DBase } from "./d-base";
import { DDynamicText } from "./d-dynamic-text";
import { DMenuItem, DMenuItemOptions, DThemeMenuItem } from "./d-menu-item";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DMenuItemTextOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemText = DThemeMenuItemText
> extends DMenuItemOptions<VALUE, THEME> {

}

export interface DThemeMenuItemText extends DThemeMenuItem {
	getShortcutTextMargin(): number;
}

export class DMenuItemText<
	VALUE = unknown,
	THEME extends DThemeMenuItemText = DThemeMenuItemText,
	OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>
> extends DMenuItem<VALUE, THEME, OPTIONS> {
	protected _shortcutText!: Text | DDynamicText | null;
	protected _shortcutMargin!: number;

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.initOnClick( options );
		this.initOnOver( options );
		this.initShortcuts( options );
	}

	protected initOnClick( options?: OPTIONS ): void {
		UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
			if( this.isActionable() ) {
				this.onSelect( e );
			}
		});
	}

	protected initOnOver( options?: OPTIONS ): void {
		this.on( UtilPointerEvent.over, (): void => {
			const context = this.getContext();
			if( context != null ) {
				const parent = this.parent;
				if( parent instanceof DBase ) {
					context.trim( this.getCloseable() );
				}
			}
		});
	}

	protected initShortcuts( options?: OPTIONS ): void {
		const shortcuts = this._shortcuts;
		this._shortcutMargin = this.theme.getShortcutTextMargin();
		if( shortcuts != null && 0 < shortcuts.length ) {
			const shortcut = shortcuts[ 0 ];
			const shortcutTextValue = UtilKeyboardEvent.toString( shortcut );
			this._shortcutText = ( this._textDynamic ?
				new DDynamicText( shortcutTextValue, this._textStyle ) :
				new Text( shortcutTextValue, this._textStyle )
			);
			this.appendRenderable( this._shortcutText, true );
		} else {
			this._shortcutText = null;
		}
	}

	protected updateShortcutText(): void {
		const text = this._shortcutText;
		if( text != null ) {
			text.position.set(
				this.toRounded( this.width - this._shortcutMargin - text.width ),
				this.toRounded( ( this.height - text.height ) * 0.5 )
			);
		}
	}

	protected updateTextColor( text: DDynamicText | Text ): void {
		super.updateTextColor( text );

		const shortcutText = this._shortcutText;
		if( shortcutText != null ) {
			const theme = this.theme;
			const state = this.state;
			shortcutText.style.fill = theme.getColor( state );
			shortcutText.alpha = theme.getAlpha( state );
		}
	}

	protected updateText(): void {
		super.updateText();
		this.updateShortcutText();
	}

	protected getType(): string {
		return "DMenuItemText";
	}

	protected onSelect( e: KeyboardEvent | interaction.InteractionEvent ): void {
		const closeable = this.getCloseable();
		if( closeable != null ) {
			closeable.emit( "select", this.value, this, closeable );
		}

		super.onSelect( e );
	}

	protected onShortcut( e: KeyboardEvent ) {
		super.onShortcut( e );
		this.onSelect( e );
	}
}
