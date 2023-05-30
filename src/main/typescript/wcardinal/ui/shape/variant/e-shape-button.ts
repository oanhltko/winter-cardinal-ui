/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";

export class EShapeButton extends EShapeRectangleRounded {
	protected _isToggle: boolean;
	protected _isGrouped: boolean;

	constructor(type: EShapeType = EShapeType.BUTTON) {
		super(type);
		this._isToggle = false;
		this._isGrouped = false;
	}

	get isToggle(): boolean {
		return this._isToggle;
	}

	set isToggle(isToggle: boolean) {
		this._isToggle = isToggle;
	}

	/**
	 * All the sibling buttons whose `isGrouped` is true is considered to to be grouped.
	 */
	get isGrouped(): boolean {
		return this._isGrouped;
	}

	set isGrouped(isGrouped: boolean) {
		this._isGrouped = isGrouped;
	}

	override copy(source: EShape, part?: number): this {
		super.copy(source, part);
		if (source instanceof EShapeButton) {
			this._isToggle = source.isToggle;
			this._isGrouped = source.isGrouped;
		}
		return this;
	}

	clone(): EShapeRectangleRounded {
		return new EShapeButton(this.type).copy(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		const isToggle = this._isToggle ? 1 : 0;
		const isGrouped = this._isGrouped ? 2 : 0;
		result[15] = manager.addResource(`[${isToggle | isGrouped}]`);
		return result;
	}
}
