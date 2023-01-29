/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilSvgAtlasBuilder } from "../util/util-svg-atlas-builder";
import { DTheme } from "./d-theme";

export class DThemes {
	private static DEFAULT_THEME_CLASS: (new () => DTheme) | null = null;
	private static INSTANCE: DTheme | null = null;

	public static setDefaultThemeClass(theme: new () => DTheme): void {
		this.DEFAULT_THEME_CLASS = theme;
	}

	public static getDefaultThemeClass(): (new () => DTheme) | null {
		return this.DEFAULT_THEME_CLASS;
	}

	public static getInstance(): DTheme {
		if (this.INSTANCE == null) {
			const defaultThemeClass = this.getDefaultThemeClass();
			if (defaultThemeClass == null) {
				throw new Error("No default theme class found");
			}
			this.INSTANCE = new defaultThemeClass();
		}
		return this.INSTANCE;
	}

	public static setInstance(instance: DTheme): DTheme | null {
		const result = this.INSTANCE;
		this.INSTANCE = instance;
		return result;
	}

	public static get<THEME>(type: string): THEME {
		return this.getInstance().get<THEME>(type);
	}

	public static set<THEME>(type: string, instance: THEME): void {
		this.getInstance().set<THEME>(type, instance);
	}

	public static getClass<THEME>(type: string): new () => THEME {
		return this.getInstance().getClass<THEME>(type);
	}

	public static setClass<THEME>(type: string, themeClass: new () => THEME): void {
		this.getInstance().setClass<THEME>(type, themeClass);
	}

	public static getAtlas(): UtilSvgAtlasBuilder {
		return this.getInstance().getAtlas();
	}
}
