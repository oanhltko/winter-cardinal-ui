/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapePoints } from "../e-shape-points";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeData } from "../e-shape-data";
import { EShapeText } from "../e-shape-text";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeGroupFillViewer } from "./e-shape-group-fill-viewer";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupStrokeViewer } from "./e-shape-group-stroke-viewer";
import { EShapeDataImpl } from "../e-shape-data-impl";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";
import { EShapeTextImpl } from "./e-shape-text-impl";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";
import { EShapeImageLike } from "../e-shape-image-like";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";

export abstract class EShapeGroupViewer extends EShapeBase {
	size: EShapeGroupSize;
	fill: EShapeFill;
	stroke: EShapeStroke;
	/** @deprecated in favor of {@link data} */
	tag: EShapeData;
	data: EShapeData;
	text: EShapeText;

	protected _mode: EShapeResourceManagerDeserializationMode;
	protected _depth: number;

	constructor(mode: EShapeResourceManagerDeserializationMode, depth: number, type: EShapeType) {
		super(type);
		this._mode = mode;
		this._depth = depth;
		const data = this.newData();
		this.data = data;
		this.tag = data;
		this.size = this.newGroupSize(mode, depth);
		this.fill = this.newGroupFill();
		this.stroke = this.newGroupStroke();
		this.text = this.newGroupText();
	}

	get mode(): EShapeResourceManagerDeserializationMode {
		return this._mode;
	}

	get depth(): number {
		return this._depth;
	}

	protected newGroupSize(
		mode: EShapeResourceManagerDeserializationMode,
		depth: number
	): EShapeGroupSize {
		const sizeX = EShapeDefaults.SIZE_X;
		const sizeY = EShapeDefaults.SIZE_Y;
		if (mode !== EShapeResourceManagerDeserializationMode.VIEWER) {
			return new EShapeGroupSizeEditor(this, sizeX, sizeY, this.isGroupSizeFittable());
		} else {
			return new EShapeGroupSizeViewer(this, sizeX, sizeY, sizeX, sizeY);
		}
	}

	protected isGroupSizeFittable(): boolean {
		return true;
	}

	protected newData(): EShapeData {
		return new EShapeDataImpl();
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeGroupFillViewer();
	}

	protected newGroupStroke(): EShapeStroke {
		return new EShapeGroupStrokeViewer();
	}

	protected newGroupText(): EShapeText {
		return new EShapeTextImpl(
			this,
			EShapeDefaults.TEXT_VALUE,
			EShapeDefaults.TEXT_COLOR,
			EShapeDefaults.TEXT_ALPHA,
			EShapeDefaults.TEXT_FAMILY,
			EShapeDefaults.TEXT_SIZE
		);
	}

	protected getBoundsSize(): IPoint {
		const size = this.size;
		if (size instanceof EShapeGroupSizeViewer) {
			return size.base;
		} else {
			return size;
		}
	}

	onChildTransformChange(): void {
		super.onChildTransformChange();
		this.size.fit();
	}

	get corner(): EShapeCorner {
		return EShapeCorner.NONE;
	}

	set corner(corner: EShapeCorner) {
		// DO NOTHING
	}

	get gradient(): EShapeGradientLike | undefined {
		return undefined;
	}

	set gradient(gradient: EShapeGradientLike | undefined) {
		// DO NOTHING
	}

	override serializeGradient(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	get radius(): number {
		return 0;
	}

	set radius(radius: number) {
		// DO NOTHING
	}

	get image(): EShapeImageLike | undefined {
		return undefined;
	}

	set image(image: EShapeImageLike | undefined) {
		// DO NOTHING
	}

	override serializeImage(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	get points(): EShapePoints | undefined {
		return undefined;
	}

	set points(points: EShapePoints | undefined) {
		// DO NOTHING
	}

	abstract clone(): EShapeGroupViewer;

	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		return false;
	}
}
