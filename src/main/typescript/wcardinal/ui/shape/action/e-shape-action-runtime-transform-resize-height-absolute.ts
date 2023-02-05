/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { toSizeNormalized } from "../variant/to-size-normalized";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";

export class EShapeActionRuntimeTransformResizeHeightAbsolute extends EShapeActionRuntimeTransformResize {
	protected origin: number;

	constructor(value: EShapeActionValueTransformResize) {
		super(value, EShapeRuntimeReset.HEIGHT | EShapeRuntimeReset.POSITION);
		this.origin = value.originY;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const sizeAbsolute = this.size(shape, time, EShapeActionEnvironment);
			const size = shape.size;
			const writtenHeight = !!(runtime.written & EShapeRuntimeReset.HEIGHT);
			const oldSizeY = writtenHeight ? size.y : runtime.sizeY;
			size.y = toSizeNormalized(sizeAbsolute);
			runtime.written |= EShapeRuntimeReset.HEIGHT;
			this.adjustPosition(shape, runtime, 0, oldSizeY - size.y, 0.5, this.origin);
		}
	}
}
