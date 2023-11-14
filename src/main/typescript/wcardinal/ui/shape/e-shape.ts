/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, IPoint, Point, Rectangle, Renderer, Texture, utils } from "pixi.js";
import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShapeAction } from "./action/e-shape-action";
import { EShapeContainer } from "./e-shape-container";
import { EShapeCopyPart } from "./e-shape-copy-part";
import { EShapeCorner } from "./e-shape-corner";
import { EShapeEditor } from "./e-shape-editor";
import { EShapeFill } from "./e-shape-fill";
import { EShapeGradientLike } from "./e-shape-gradient";
import { EShapeLayout } from "./e-shape-layout";
import { EShapePoints } from "./e-shape-points";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeRuntime } from "./e-shape-runtime";
import { EShapeStateSet } from "./e-shape-state-set";
import { EShapeStroke } from "./e-shape-stroke";
import { EShapeData } from "./e-shape-data";
import { EShapeText } from "./e-shape-text";
import { EShapeTransform } from "./e-shape-transform";
import { EShapeType } from "./e-shape-type";
import { EShapeUploaded } from "./e-shape-uploaded";
import { EShapeConnectorContainer } from "./e-shape-connector-container";
import { EShapeCapabilityContainer } from "./e-shape-capability-container";
import { EShapeLockPart } from "./variant/e-shape-lock-part";

export interface EShape extends utils.EventEmitter {
	id: string; // Used to identity a shape by users
	uuid: number; // Used to identify a shape uniquely
	readonly type: EShapeType;
	readonly size: IPoint;
	readonly fill: EShapeFill;
	readonly stroke: EShapeStroke;
	readonly transform: EShapeTransform;
	radius: number;
	corner: EShapeCorner;
	readonly points?: EShapePoints;
	image?: HTMLImageElement;
	imageSrc?: string;
	texture?: Texture;
	gradient?: EShapeGradientLike;
	readonly text: EShapeText;
	/** @deprecated in favor of {@link data}. */
	readonly tag: EShapeData;
	readonly data: EShapeData;
	readonly action: EShapeAction;
	cursor?: string;
	visible: boolean;
	readonly worldVisible: boolean;
	interactive: boolean;
	shortcut?: string;
	title?: string;
	connector: EShapeConnectorContainer;

	// Hierarchy
	parent: EShapeContainer | EShape | null;
	root: EShape;
	children: EShape[];
	layout?: EShapeLayout;

	// Working space
	index: number; // A work space for sorting.
	selected: boolean;
	reference: number; // Count of references from commands

	// Working space for the viewer
	runtime?: EShapeRuntime;

	// Working space for the editor
	editor?: EShapeEditor;

	// Working space for the renderer
	uploaded?: EShapeUploaded;

	// State
	readonly state: EShapeStateSet;

	// Capability
	readonly capability: EShapeCapabilityContainer;
	getCapability(): EShapeCapabilityContainer | undefined;

	//
	toDirty(): void;
	attach(parent: EShapeContainer | EShape, at?: number): this;
	onAttach(): void;
	detach(exceptions?: Set<EShape>): this;
	onDetach(exceptions?: Set<EShape>): void;
	copy(source: EShape): this;
	copy(source: EShape, part: EShapeCopyPart): this;
	clone(): EShape;
	destroy(): void;

	//
	focus(): this;
	blur(): this;

	//
	onSizeChange(): void;

	// Action
	update(time: number): void;
	onRender(time: number, renderer: Renderer): void;

	// Lock & unlock
	lock(part: EShapeLockPart): this;
	unlock(part: EShapeLockPart, invoke: boolean): this;

	// Transform
	updateTransform(): void;
	onTransformChange(): void;
	onParentTransformChange(): void;
	onChildTransformChange(): void;

	// Uploaded
	updateUploaded(recursively?: boolean): void;

	// Serialization
	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem;
	addUuid(manager: EShapeResourceManagerSerialization): void;
	updateUuid(manager: EShapeResourceManagerSerialization): void;

	// Hit test
	contains(x: number, y: number): EShape | null;
	containsBBox(x: number, y: number): boolean;
	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean;
	containsAbsBBox(x: number, y: number, ax: number, ay: number): boolean;

	// Coordinate
	toGlobal(position: IPoint, result: Point, skipUpdate?: boolean): Point;
	toLocal(position: IPoint, from?: DisplayObject, result?: Point, skipUpdate?: boolean): Point;
	getBounds(skipUpdate?: boolean, result?: Rectangle): Rectangle;
	getBoundsInternal(skipUpdate?: boolean, result?: Rectangle): Rectangle;
	getBoundsLocal(skipUpdate?: boolean, result?: Rectangle): Rectangle;
}
