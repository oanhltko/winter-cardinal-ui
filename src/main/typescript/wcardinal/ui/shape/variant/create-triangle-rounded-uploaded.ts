/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import {
	TRIANGLE_ROUNDED_INDEX_COUNT,
	TRIANGLE_ROUNDED_VERTEX_COUNT
} from "./build-triangle-rounded";
import { BuilderText } from "./builder-text";
import { BuilderTriangleRounded } from "./builder-triangle-rounded";

export const createTriangleRoundedUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = TRIANGLE_ROUNDED_VERTEX_COUNT + tvcount;
	const icount = TRIANGLE_ROUNDED_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderTriangleRounded(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + TRIANGLE_ROUNDED_VERTEX_COUNT,
				ioffset + TRIANGLE_ROUNDED_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};
