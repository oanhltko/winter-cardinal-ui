/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import {
	buildTriangleClipping,
	buildTriangleIndex,
	buildTriangleStep,
	buildTriangleUv,
	buildTriangleVertex,
	TRIANGLE_VERTEX_COUNT,
	TRIANGLE_WORLD_SIZE
} from "./build-triangle";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderTriangle extends BuilderBase {
	init(buffer: BuilderBuffer): void {
		buffer.updateClippings();
		buffer.updateIndices();
		buildTriangleClipping(buffer.clippings, this.vertexOffset);
		buildTriangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);
		this.inited |= BuilderFlag.CLIPPING_AND_INDEX;
	}

	update(buffer: BuilderBuffer, shape: EShape): void {
		this.updateVertexStepAndUv(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
	}

	protected updateVertexStepAndUv(buffer: BuilderBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeStyle !== strokeStyle;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_STEP_AND_UV);

		if (isNotInited || isVertexChanged || isTransformChanged || isTextureChanged) {
			this.inited |= BuilderFlag.VERTEX_STEP_AND_UV;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const voffset = this.vertexOffset;

			buffer.updateVertices();
			buildTriangleVertex(
				buffer.vertices,
				voffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform,
				TRIANGLE_WORLD_SIZE
			);

			if (isNotInited || isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
				buildTriangleStep(
					buffer.steps,
					buffer.clippings,
					voffset,
					TRIANGLE_VERTEX_COUNT,
					strokeWidth,
					strokeStyle,
					TRIANGLE_WORLD_SIZE
				);
			}

			if (isNotInited || isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildTriangleUv(buffer.uvs, toTextureUvs(texture), voffset, TRIANGLE_WORLD_SIZE);
			}
		}
	}
}
