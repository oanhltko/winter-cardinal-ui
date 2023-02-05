/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";

export class EShapeActionRuntimeTransformMoveRelativeY extends EShapeActionRuntimeTransformMove {
	constructor(action: EShapeActionValueTransformMove) {
		super(action, EShapeRuntimeReset.POSITION_Y);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const amount = this.amount(shape, time, EShapeActionEnvironment);
			const writtenPositionY = !!(runtime.written & EShapeRuntimeReset.POSITION_Y);
			const position = shape.transform.position;
			const oldPositionY = writtenPositionY ? position.y : runtime.y;
			position.y = oldPositionY + amount;
			runtime.written |= this.reset;
		}
	}
}
