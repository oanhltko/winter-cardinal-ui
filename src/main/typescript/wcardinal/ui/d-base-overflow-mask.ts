/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics, Renderer } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseReflowable } from "./d-base-reflowable";
import { DCornerMask } from "./d-corner-mask";

export class DBaseOverflowMask extends Graphics implements DBaseReflowable {
	protected _isInitialized: boolean;
	protected _width: number;
	protected _height: number;
	protected _cornderRadius: number;
	protected _cornerMask: DCornerMask;

	constructor(parent: DBase) {
		super();
		this.parent = parent;

		this._isInitialized = false;
		this._width = 0;
		this._height = 0;
		this._cornderRadius = 0;
		this._cornerMask = DCornerMask.NONE;
	}

	render(renderer: Renderer): void {
		this.updateTransform();
		super.render(renderer);
	}

	onReflow(base: DBase, width: number, height: number): void {
		const corner = base.corner;
		const cornerRadius = Math.max(0, corner.getRadius() - 0.5);
		const cornerMask = corner.getMask();
		if (
			this._isInitialized &&
			this._width === width &&
			this._height === height &&
			this._cornderRadius === cornerRadius &&
			this._cornerMask === cornerMask
		) {
			return;
		}
		this._isInitialized = true;
		this._width = width;
		this._height = height;
		this._cornderRadius = cornerRadius;
		this._cornerMask = cornerMask;

		const x = 0;
		const y = 0;
		const tl = cornerMask & DCornerMask.TOP_LEFT ? 0 : cornerRadius;
		const tr = cornerMask & DCornerMask.TOP_RIGHT ? 0 : cornerRadius;
		const bl = cornerMask & DCornerMask.BOTTOM_LEFT ? 0 : cornerRadius;
		const br = cornerMask & DCornerMask.BOTTOM_RIGHT ? 0 : cornerRadius;
		this.clear();
		this.beginFill(0xffffff, 1);
		this.lineStyle(0, 0, 0, 0, false);
		if (tl <= 0 && tr <= 0 && bl <= 0 && br <= 0) {
			this.drawRect(x, y, width, height);
		} else {
			this.moveTo(x + tl, y);
			if (0 < tr) {
				this.arcTo(x + width, y, x + width, y + height, tr);
			} else {
				this.lineTo(x + width, y);
			}
			if (0 < br) {
				this.arcTo(x + width, y + height, x, y + height, br);
			} else {
				this.lineTo(x + width, y + height);
			}
			if (0 < bl) {
				this.arcTo(x, y + height, x, y, bl);
			} else {
				this.lineTo(x, y + height);
			}
			if (0 < tl) {
				this.arcTo(x, y, x + width, y, tl);
			} else {
				this.lineTo(x, y);
			}
		}
		this.endFill();
	}
}
