/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, IPoint, Point, Rectangle, Texture, utils } from "pixi.js";
import { DBaseState } from "../d-base-state";
import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShapeAction } from "./action/e-shape-action";
import { EShapeContainer } from "./e-shape-container";
import { EShapeCorner } from "./e-shape-corner";
import { EShapeEditor } from "./e-shape-editor";
import { EShapeFill } from "./e-shape-fill";
import { EShapeGradientLike } from "./e-shape-gradient";
import { EShapeLayout } from "./e-shape-layout";
import { EShapePoints } from "./e-shape-points";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeRuntime } from "./e-shape-runtime";
import { EShapeStroke } from "./e-shape-stroke";
import { EShapeTag } from "./e-shape-tag";
import { EShapeText } from "./e-shape-text";
import { EShapeTransform } from "./e-shape-transform";
import { EShapeType } from "./e-shape-type";
import { EShapeUploaded } from "./e-shape-uploaded";

export enum EShapeCopyPart {
	NONE = 0,
	TRANSFORM = 1,
	SIZE = 2,
	STYLE = 4,
	ACTION = 8,
	POINTS = 16,
	STATE = 32,
	ALL = TRANSFORM | SIZE | STYLE | ACTION | POINTS | STATE
}

export interface EShape extends utils.EventEmitter {
	id: string;
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
	readonly tag: EShapeTag;
	readonly action: EShapeAction;
	cursor: string;
	visible: boolean;
	interactive: boolean;
	shortcut?: string;
	title?: string;

	// Hierarchy
	parent: EShapeContainer | EShape | null;
	root: EShape;
	children: EShape[];
	layout?: EShapeLayout;

	// Working space
	index: number;		// A work space for sorting.
	selected: boolean;
	reference: number;	// Count of references from commands

	// Working space for the viewer
	runtime?: EShapeRuntime;

	// Working space for the editor
	editor?: EShapeEditor;

	// Working space for the renderer
	uploaded?: EShapeUploaded;

	//
	hovered: boolean;
	active: boolean;
	readonly: boolean;
	readonly enabled: boolean;
	disabled: boolean;
	dragging: boolean;
	focused: boolean;
	readonly focusedin: boolean;
	unfocusable: boolean;
	readonly clicked: boolean;
	readonly pressed: boolean;
	readonly down: boolean;
	readonly up: boolean;
	readonly shadowed: boolean;

	//
	toDirty(): void;
	attach( parent: EShapeContainer | EShape, at?: number ): this;
	detach(): this;
	copy( source: EShape ): this;
	copy( source: EShape, part: EShapeCopyPart ): this;
	clone(): EShape;
	destroy(): void;

	//
	getState(): DBaseState;
	setState( state: DBaseState, isOn: boolean ): this;
	hasState( state: DBaseState ): boolean;
	focus(): this;
	blur(): this;

	//
	onDblClick( e: MouseEvent ): void;
	onShortcut( e: KeyboardEvent ): void;
	onSizeChange(): void;

	// Action
	update( time: number ): void;

	// Transform
	updateTransform(): void;
	disallowOnTransformChange(): void;
	allowOnTransformChange( invokeOnTransformChange: boolean ): void;
	onTransformChange(): void;
	onChildTransformChange(): void;

	// Uploaded
	disallowUploadedUpdate(): void;
	allowUploadedUpdate(): void;
	updateUploaded(): void;
	updateUploadedRecursively(): void;

	// Serialization
	serialize( manager: EShapeResourceManagerSerialization ): DDiagramSerializedItem;

	// Hit test
	contains( point: Point ): EShape | null;
	containsBBox( point: Point ): boolean;

	// Coordinate
	toGlobal( position: IPoint, point: Point, skipUpdate?: boolean ): Point;
	toLocal<T extends IPoint>(
		position: IPoint,
		from?: DisplayObject,
		point?: T,
		skipUpdate?: boolean
	): T;
	getBounds( work: Point, skipUpdate: boolean, result: Rectangle ): Rectangle;
	getBoundsInternal( work: Point, skipUpdate: boolean, result: Rectangle ): Rectangle;
	getBoundsLocal( work: Point, skipUpdate: boolean, result: Rectangle ): Rectangle;
}
