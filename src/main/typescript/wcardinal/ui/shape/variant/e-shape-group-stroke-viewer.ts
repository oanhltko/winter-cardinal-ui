/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeStroke, EShapeStrokeLike, EShapeStrokeSide } from "../e-shape-stroke";

export class EShapeGroupStrokeViewer implements EShapeStroke {
	constructor() {
		// DO NOTHING
	}

	get enable(): boolean {
		return false;
	}

	set enable( enable: boolean ) {
		// DO NOTHING
	}

	get color(): number {
		return 0xffffff;
	}

	set color( color: number ) {
		// DO NOTHING
	}

	get alpha(): number {
		return 1.0;
	}

	set alpha( alpha: number ) {
		// DO NOTHING
	}

	get width(): number {
		return 1.0;
	}

	set width( width: number ) {
		// DO NOTHING
	}

	get align(): number {
		return 0.0;
	}

	set align( width: number ) {
		// DO NOTHING
	}

	get side(): EShapeStrokeSide {
		return EShapeStrokeSide.NONE;
	}

	set side( side: EShapeStrokeSide ) {
		// DO NOTHING
	}

	copy( target?: Partial<EShapeStrokeLike> ) {
		// DO NOTHING
	}

	set( enable?: boolean, color?: number, alpha?: number, width?: number, side?: EShapeStrokeSide ) {
		// DO NOTHING
	}

	clone(): EShapeGroupStrokeViewer {
		return new EShapeGroupStrokeViewer();
	}

	toObject(): EShapeStrokeLike {
		return {
			enable: false,
			color: 0xffffff,
			alpha: 1.0,
			width: 1.0,
			align: 0.0,
			side: EShapeStrokeSide.NONE
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		//
	}
}
