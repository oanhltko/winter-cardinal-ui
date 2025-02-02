/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeSide } from "../e-shape-stroke";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeRectangleRoundedUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );
		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;

		// Indices
		buffer.indexBuffer.update();
		const indices = buffer.indices;
		let ii = ioffset * 3;

		// Top-left corner
		indices[ ii + 0 ] = voffset + 0;
		indices[ ii + 1 ] = voffset + 1;
		indices[ ii + 2 ] = voffset + 2;
		indices[ ii + 3 ] = voffset + 1;
		indices[ ii + 4 ] = voffset + 3;
		indices[ ii + 5 ] = voffset + 2;
		ii += 6;

		// Top-right corner
		indices[ ii + 0 ] = voffset + 4;
		indices[ ii + 1 ] = voffset + 5;
		indices[ ii + 2 ] = voffset + 6;
		indices[ ii + 3 ] = voffset + 5;
		indices[ ii + 4 ] = voffset + 7;
		indices[ ii + 5 ] = voffset + 6;
		ii += 6;

		// Bottom-left corner
		indices[ ii + 0 ] = voffset + 8;
		indices[ ii + 1 ] = voffset + 9;
		indices[ ii + 2 ] = voffset + 10;
		indices[ ii + 3 ] = voffset + 9;
		indices[ ii + 4 ] = voffset + 11;
		indices[ ii + 5 ] = voffset + 10;
		ii += 6;

		// Bottom-right corner
		indices[ ii + 0 ] = voffset + 12;
		indices[ ii + 1 ] = voffset + 13;
		indices[ ii + 2 ] = voffset + 14;
		indices[ ii + 3 ] = voffset + 13;
		indices[ ii + 4 ] = voffset + 15;
		indices[ ii + 5 ] = voffset + 14;
		ii += 6;

		// Top edge
		indices[ ii + 0 ] = voffset + 16;
		indices[ ii + 1 ] = voffset + 17;
		indices[ ii + 2 ] = voffset + 20;
		indices[ ii + 3 ] = voffset + 17;
		indices[ ii + 4 ] = voffset + 21;
		indices[ ii + 5 ] = voffset + 20;
		ii += 6;

		indices[ ii + 0 ] = voffset + 17;
		indices[ ii + 1 ] = voffset + 18;
		indices[ ii + 2 ] = voffset + 21;
		indices[ ii + 3 ] = voffset + 18;
		indices[ ii + 4 ] = voffset + 22;
		indices[ ii + 5 ] = voffset + 21;
		ii += 6;

		// Upper middle
		indices[ ii + 0 ] = voffset + 19;
		indices[ ii + 1 ] = voffset + 21;
		indices[ ii + 2 ] = voffset + 24;
		indices[ ii + 3 ] = voffset + 21;
		indices[ ii + 4 ] = voffset + 25;
		indices[ ii + 5 ] = voffset + 24;
		ii += 6;

		indices[ ii + 0 ] = voffset + 21;
		indices[ ii + 1 ] = voffset + 23;
		indices[ ii + 2 ] = voffset + 26;
		indices[ ii + 3 ] = voffset + 23;
		indices[ ii + 4 ] = voffset + 27;
		indices[ ii + 5 ] = voffset + 26;
		ii += 6;

		// Lower middle
		indices[ ii + 0 ] = voffset + 24;
		indices[ ii + 1 ] = voffset + 25;
		indices[ ii + 2 ] = voffset + 28;
		indices[ ii + 3 ] = voffset + 25;
		indices[ ii + 4 ] = voffset + 30;
		indices[ ii + 5 ] = voffset + 28;
		ii += 6;

		indices[ ii + 0 ] = voffset + 26;
		indices[ ii + 1 ] = voffset + 27;
		indices[ ii + 2 ] = voffset + 30;
		indices[ ii + 3 ] = voffset + 27;
		indices[ ii + 4 ] = voffset + 32;
		indices[ ii + 5 ] = voffset + 30;
		ii += 6;

		// Bottom edge
		indices[ ii + 0 ] = voffset + 29;
		indices[ ii + 1 ] = voffset + 30;
		indices[ ii + 2 ] = voffset + 33;
		indices[ ii + 3 ] = voffset + 30;
		indices[ ii + 4 ] = voffset + 34;
		indices[ ii + 5 ] = voffset + 33;
		ii += 6;

		indices[ ii + 0 ] = voffset + 30;
		indices[ ii + 1 ] = voffset + 31;
		indices[ ii + 2 ] = voffset + 34;
		indices[ ii + 3 ] = voffset + 31;
		indices[ ii + 4 ] = voffset + 35;
		indices[ ii + 5 ] = voffset + 34;

		// Text
		this.initText();

		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateType1Vertex( buffer, shape );
		this.updateType1Clipping( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateType1Step( buffer, shape );
		this.updateType1Uv( buffer, shape );
		this.updateText( buffer, shape );
	}

	/**
	 * Please note that this method must be executed before updateClippingType1(...).
	 */
	protected updateType1Vertex( buffer: EShapeBuffer, shape: EShape ) {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const transformLocalId = this.toTransformLocalId( shape );
		const radius = shape.radius;
		const isSizeChanged = (
			sizeX !== this.sizeX ||
			sizeY !== this.sizeY ||
			radius !== this.radius
		);
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );
		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );
		if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.radius = radius;
			if( isSizeChanged ) {
				// Invalidate the corner to update the clippings
				this.corner = NaN;

				// Invalidate the textureTransformId to updateh UVs.
				this.textureTransformId = NaN;
			}
			// Invalidate the stroke width to update the steps / antialiases
			this.strokeWidth = NaN;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;
			buffer.vertexBuffer.update();

			// Calculate the transformed positions
			//
			//  0   1       4   5
			// |---|       |---|
			// |2  |3      |6  |7
			// |---|       |---|
			//
			//
			//
			//
			//
			// |---|       |---|
			// |8  |9      |12 |13
			// |---|       |---|
			//  10  11      14  15
			//
			//
			//      16  17  18       <-- Top edge
			//     |---|---|
			//  19 |20 |21 |22  23   <-- Top
			// |---|---|---|---|
			// |       |       |
			// |24   25|26     |27   <-- Middle
			// |-------|-------|
			// |       |       |
			// |       |       |
			// |---|---|---|---|
			//  28 |29 |30 |31  32   <-- Bottom
			//     |---|---|
			//      33  34  35       <-- Bottom edge
			//
			const s = strokeAlign * strokeWidth;
			const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
			const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
			const ax = Math.abs( sx );
			const ay = Math.abs( sy );
			const a = radius * Math.min( ax, ay );
			const rx = a / ax;
			const ry = a / ay;

			const internalTransform = shape.transform.internalTransform;
			const work = buffer.work;
			work.set( -sx, -sy );
			internalTransform.apply( work, work );
			const x0 = work.x;
			const y0 = work.y;
			work.set( 0, -sy );
			internalTransform.apply( work, work );
			const x2 = work.x;
			const y2 = work.y;
			const dxh = x2 - x0;
			const dyh = y2 - y0;
			const dxhr = rx * dxh;
			const dyhr = rx * dyh;
			const x1 = x0 + dxhr;
			const y1 = y0 + dyhr;
			const x4 = x2 + dxh;
			const y4 = y2 + dyh;
			const x3 = x4 - dxhr;
			const y3 = y4 - dyhr;
			const x11 = internalTransform.tx;
			const y11 = internalTransform.ty;
			const dxv = x11 - x2;
			const dyv = y11 - y2;
			const dxvr = ry * dxv;
			const dyvr = ry * dyv;
			const x7 = x2 + dxvr;
			const y7 = y2 + dyvr;
			const x5 = x7 - dxh;
			const y5 = y7 - dyh;
			const x6 = x5 + dxhr;
			const y6 = y5 + dyhr;
			const x9 = x7 + dxh;
			const y9 = y7 + dyh;
			const x8 = x9 - dxhr;
			const y8 = y9 - dyhr;
			const x10 = x11 - dxh;
			const y10 = y11 - dyh;
			const x12 = x11 + dxh;
			const y12 = y11 + dyh;
			const x20 = x11 + dxv;
			const y20 = y11 + dyv;
			const x15 = x20 - dxvr;
			const y15 = y20 - dyvr;
			const x13 = x15 - dxh;
			const y13 = y15 - dyh;
			const x14 = x13 + dxhr;
			const y14 = y13 + dyhr;
			const x17 = x15 + dxh;
			const y17 = y15 + dyh;
			const x16 = x17 - dxhr;
			const y16 = y17 - dyhr;
			const x18 = x20 - dxh;
			const y18 = y20 - dyh;
			const x19 = x18 + dxhr;
			const y19 = y18 + dyhr;
			const x22 = x20 + dxh;
			const y22 = y20 + dyh;
			const x21 = x22 - dxhr;
			const y21 = y22 - dyhr;

			// World size
			this.worldSizeXHalf = this.calcLength( x0, y0, x2, y2 );
			this.worldSizeYHalf = this.calcLength( x0, y0, x10, y10 );
			this.worldSizeR = this.calcLength( x0, y0, x1, y1 );

			// Vertices
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			let iv = voffset * 2;

			// Top-left corner
			vertices[ iv + 0 ] = x0;
			vertices[ iv + 1 ] = y0;
			vertices[ iv + 2 ] = x1;
			vertices[ iv + 3 ] = y1;
			vertices[ iv + 4 ] = x5;
			vertices[ iv + 5 ] = y5;
			vertices[ iv + 6 ] = x6;
			vertices[ iv + 7 ] = y6;
			iv += 8;

			// Top-right corner
			vertices[ iv + 0 ] = x3;
			vertices[ iv + 1 ] = y3;
			vertices[ iv + 2 ] = x4;
			vertices[ iv + 3 ] = y4;
			vertices[ iv + 4 ] = x8;
			vertices[ iv + 5 ] = y8;
			vertices[ iv + 6 ] = x9;
			vertices[ iv + 7 ] = y9;
			iv += 8;

			// Bottom-left corner
			vertices[ iv + 0 ] = x13;
			vertices[ iv + 1 ] = y13;
			vertices[ iv + 2 ] = x14;
			vertices[ iv + 3 ] = y14;
			vertices[ iv + 4 ] = x18;
			vertices[ iv + 5 ] = y18;
			vertices[ iv + 6 ] = x19;
			vertices[ iv + 7 ] = y19;
			iv += 8;

			// Bottom-right corner
			vertices[ iv + 0 ] = x16;
			vertices[ iv + 1 ] = y16;
			vertices[ iv + 2 ] = x17;
			vertices[ iv + 3 ] = y17;
			vertices[ iv + 4 ] = x21;
			vertices[ iv + 5 ] = y21;
			vertices[ iv + 6 ] = x22;
			vertices[ iv + 7 ] = y22;
			iv += 8;

			// Top edge
			vertices[ iv + 0 ] = x1;
			vertices[ iv + 1 ] = y1;
			vertices[ iv + 2 ] = x2;
			vertices[ iv + 3 ] = y2;
			vertices[ iv + 4 ] = x3;
			vertices[ iv + 5 ] = y3;
			iv += 6;

			// Top
			vertices[ iv + 0 ] = x5;
			vertices[ iv + 1 ] = y5;
			vertices[ iv + 2 ] = x6;
			vertices[ iv + 3 ] = y6;
			vertices[ iv + 4 ] = x7;
			vertices[ iv + 5 ] = y7;
			vertices[ iv + 6 ] = x8;
			vertices[ iv + 7 ] = y8;
			vertices[ iv + 8 ] = x9;
			vertices[ iv + 9 ] = y9;
			iv += 10;

			// Middle
			vertices[ iv + 0 ] = x10;
			vertices[ iv + 1 ] = y10;
			vertices[ iv + 2 ] = x11;
			vertices[ iv + 3 ] = y11;
			vertices[ iv + 4 ] = x11;
			vertices[ iv + 5 ] = y11;
			vertices[ iv + 6 ] = x12;
			vertices[ iv + 7 ] = y12;
			iv += 8;

			// Bottom
			vertices[ iv + 0 ] = x13;
			vertices[ iv + 1 ] = y13;
			vertices[ iv + 2 ] = x14;
			vertices[ iv + 3 ] = y14;
			vertices[ iv + 4 ] = x15;
			vertices[ iv + 5 ] = y15;
			vertices[ iv + 6 ] = x16;
			vertices[ iv + 7 ] = y16;
			vertices[ iv + 8 ] = x17;
			vertices[ iv + 9 ] = y17;
			iv += 10;

			// Bottom edge
			vertices[ iv + 0 ] = x19;
			vertices[ iv + 1 ] = y19;
			vertices[ iv + 2 ] = x20;
			vertices[ iv + 3 ] = y20;
			vertices[ iv + 4 ] = x21;
			vertices[ iv + 5 ] = y21;
		}
	}

	/**
	 * Please note that this method must be executed after the updateVertexType1(...).
	 */
	protected updateType1Clipping( buffer: EShapeBuffer, shape: EShape ) {
		const corner = shape.corner;
		if( corner !== this.corner ) {
			this.corner = corner;

			// Invalidate the strokeWidth to update steps / antialiases.
			this.strokeWidth = NaN;

			// Clippings
			buffer.clippingBuffer.update();
			const clippings = buffer.clippings;
			const voffset = this.vertexOffset;
			let ic = voffset * 3;
			const rxc = 1 - this.worldSizeR / this.worldSizeXHalf;
			const ryc = 1 - this.worldSizeR / this.worldSizeYHalf;

			// Top-left corner
			if( corner & EShapeCorner.TOP_LEFT ) {
				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;
			} else {
				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;
			}

			// Top-right corner
			if( corner & EShapeCorner.TOP_RIGHT ) {
				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;
			} else {
				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;
			}

			// Bottom-left corner
			if( corner & EShapeCorner.BOTTOM_LEFT ) {
				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;
			} else {
				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;
			}

			// Bottom-right corner
			if( corner & EShapeCorner.BOTTOM_RIGHT ) {
				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 0;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 0;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 1;
				ic += 3;
			} else {
				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = ryc;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = rxc;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;

				clippings[ ic + 0 ] = 1;
				clippings[ ic + 1 ] = 1;
				clippings[ ic + 2 ] = 0;
				ic += 3;
			}

			// Top edge
			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = 1;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 0;
			clippings[ ic + 1 ] = 1;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = 1;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			// Top
			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 0;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			// Middle
			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = 0;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 0;
			clippings[ ic + 1 ] = 0;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 0;
			clippings[ ic + 1 ] = 0;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = 0;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			// Bottom
			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 0;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = ryc;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			// Bottom edge
			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = 1;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = 0;
			clippings[ ic + 1 ] = 1;
			clippings[ ic + 2 ] = 0;
			ic += 3;

			clippings[ ic + 0 ] = rxc;
			clippings[ ic + 1 ] = 1;
			clippings[ ic + 2 ] = 0;
			ic += 3;
		}
	}

	protected updateType1Step( buffer: EShapeBuffer, shape: EShape ) {
		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const strokeSide = shape.stroke.side;
		if( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth || strokeSide !== this.strokeSide ) {
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;
			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();

			const work = buffer.workStep;
			this.calcStep( this.worldSizeR, strokeWidth, work );
			const swc = work[ 0 ];
			const pc0 = work[ 1 ];
			const pc1 = work[ 2 ];

			this.calcStep( this.worldSizeXHalf, strokeWidth, work );
			const swx = work[ 0 ];
			const px0 = work[ 1 ];
			const px1 = work[ 2 ];

			this.calcStep( this.worldSizeYHalf, strokeWidth, work );
			const swy = work[ 0 ];
			const py0 = work[ 1 ];
			const py1 = work[ 2 ];

			const voffset = this.vertexOffset;
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			let is = voffset * 2;
			let ia = voffset * 4;
			const rxc = 1 - this.worldSizeR / this.worldSizeXHalf;
			const ryc = 1 - this.worldSizeR / this.worldSizeYHalf;

			let swt = swy;
			let pt0 = py0;
			let swtc = swc;
			let ptc0 = pc0;
			if( ! (strokeSide & EShapeStrokeSide.TOP) ) {
				swt = 1;
				pt0 = py1;
				swtc = 1;
				ptc0 = pc1;
			}
			let swr = swx;
			let pr0 = px0;
			let swrc = swc;
			let prc0 = pc0;
			if( ! (strokeSide & EShapeStrokeSide.RIGHT) ) {
				swr = 1;
				pr0 = px1;
				swrc = 1;
				prc0 = pc1;
			}
			let swb = swy;
			let pb0 = py0;
			let swbc = swc;
			let pbc0 = pc0;
			if( ! (strokeSide & EShapeStrokeSide.BOTTOM) ) {
				swb = 1;
				pb0 = py1;
				swbc = 1;
				pbc0 = pc1;
			}
			let swl = swx;
			let pl0 = px0;
			let swlc = swc;
			let plc0 = pc0;
			if( ! (strokeSide & EShapeStrokeSide.LEFT) ) {
				swl = 1;
				pl0 = px1;
				swlc = 1;
				plc0 = pc1;
			}
			const plr0 = 0.5 * (pl0 + pr0);
			const ptb0 = 0.5 * (pt0 + pb0);

			// Top-left corner
			const corner = this.corner;
			if( corner & EShapeCorner.TOP_LEFT ) {
				steps[ is + 0 ] = swlc;
				steps[ is + 1 ] = swtc;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = swtc;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swlc;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;
			} else {
				steps[ is + 0 ] = swl;
				steps[ is + 1 ] = swt;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swl * rxc;
				steps[ is + 1 ] = swt;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swl;
				steps[ is + 1 ] = swt * ryc;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swl * rxc;
				steps[ is + 1 ] = swt * ryc;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;
			}

			// Top-right corner
			if( corner & EShapeCorner.TOP_RIGHT ) {
				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = swtc;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swrc;
				steps[ is + 1 ] = swtc;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swrc;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = ptc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;
			} else {
				steps[ is + 0 ] = swr * rxc;
				steps[ is + 1 ] = swt;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swr;
				steps[ is + 1 ] = swt;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swr * rxc;
				steps[ is + 1 ] = swt * ryc;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swr;
				steps[ is + 1 ] = swt * ryc;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pt0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;
			}

			// Bottom-left corner
			if( corner & EShapeCorner.BOTTOM_LEFT ) {
				steps[ is + 0 ] = swlc;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swlc;
				steps[ is + 1 ] = swbc;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = swbc;
				antialiases[ ia + 0 ] = plc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;
			} else {
				steps[ is + 0 ] = swl;
				steps[ is + 1 ] = swb * ryc;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swl * rxc;
				steps[ is + 1 ] = swb * ryc;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swl;
				steps[ is + 1 ] = swb;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swl * rxc;
				steps[ is + 1 ] = swb;
				antialiases[ ia + 0 ] = pl0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;
			}

			// Bottom-right corner
			if( corner & EShapeCorner.BOTTOM_RIGHT ) {
				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swrc;
				steps[ is + 1 ] = 0;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = 0;
				steps[ is + 1 ] = swbc;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swrc;
				steps[ is + 1 ] = swbc;
				antialiases[ ia + 0 ] = prc0;
				antialiases[ ia + 1 ] = pbc0;
				antialiases[ ia + 2 ] = pc1;
				antialiases[ ia + 3 ] = pc1;
				is += 2;
				ia += 4;
			} else {
				steps[ is + 0 ] = swr * rxc;
				steps[ is + 1 ] = swb * ryc;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swr;
				steps[ is + 1 ] = swb * ryc;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swr * rxc;
				steps[ is + 1 ] = swb;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;

				steps[ is + 0 ] = swr;
				steps[ is + 1 ] = swb;
				antialiases[ ia + 0 ] = pr0;
				antialiases[ ia + 1 ] = pb0;
				antialiases[ ia + 2 ] = px1;
				antialiases[ ia + 3 ] = py1;
				is += 2;
				ia += 4;
			}

			// Top edge
			steps[ is + 0 ] = swl * rxc;
			steps[ is + 1 ] = swt;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = 0;
			steps[ is + 1 ] = swt;
			antialiases[ ia + 0 ] = plr0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr * rxc;
			steps[ is + 1 ] = swt;
			antialiases[ ia + 0 ] = plr0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			// Top
			steps[ is + 0 ] = swl;
			steps[ is + 1 ] = swt * ryc;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swl * rxc;
			steps[ is + 1 ] = swt * ryc;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = 0;
			steps[ is + 1 ] = swt * ryc;
			antialiases[ ia + 0 ] = plr0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr * rxc;
			steps[ is + 1 ] = swt * ryc;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr;
			steps[ is + 1 ] = swt * ryc;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = pt0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			// Middle
			steps[ is + 0 ] = swl;
			steps[ is + 1 ] = 0;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = ptb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = 0;
			steps[ is + 1 ] = 0;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = ptb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = 0;
			steps[ is + 1 ] = 0;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = ptb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr;
			steps[ is + 1 ] = 0;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = ptb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			// Bottom
			steps[ is + 0 ] = swl;
			steps[ is + 1 ] = swb * ryc;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swl * rxc;
			steps[ is + 1 ] = swb * ryc;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = 0;
			steps[ is + 1 ] = swb * ryc;
			antialiases[ ia + 0 ] = plr0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr * rxc;
			steps[ is + 1 ] = swb * ryc;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr;
			steps[ is + 1 ] = swb * ryc;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			// Bottom edge
			steps[ is + 0 ] = swl * rxc;
			steps[ is + 1 ] = swb;
			antialiases[ ia + 0 ] = pl0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = 0;
			steps[ is + 1 ] = swb;
			antialiases[ ia + 0 ] = plr0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;

			steps[ is + 0 ] = swr * rxc;
			steps[ is + 1 ] = swb;
			antialiases[ ia + 0 ] = pr0;
			antialiases[ ia + 1 ] = pb0;
			antialiases[ ia + 2 ] = px1;
			antialiases[ ia + 3 ] = py1;
			is += 2;
			ia += 4;
		}
	}

	protected updateType1Uv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const textureUvs = this.toTextureUvs( texture ) as any;
			const x0 = textureUvs.x0;
			const x1 = textureUvs.x1;
			const x2 = textureUvs.x2;
			const x3 = textureUvs.x3;
			const y0 = textureUvs.y0;
			const y1 = textureUvs.y1;
			const y2 = textureUvs.y2;
			const y3 = textureUvs.y3;

			const x4 = 0.5 * (x0 + x1);
			const y4 = 0.5 * (y0 + y1);
			const x5 = 0.5 * (x3 + x2);
			const y5 = 0.5 * (y3 + y2);

			const ruvx = 0.5 * this.worldSizeR / this.worldSizeXHalf;
			const ruvy = 0.5 * this.worldSizeR / this.worldSizeYHalf;
			const d0x = ruvx * (x1 - x0);
			const d0y = ruvx * (y1 - y0);
			const d1x = ruvy * (x3 - x0);
			const d1y = ruvy * (y3 - y0);

			// UVs
			buffer.uvBuffer.update();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			let iuv = voffset * 2;

			// Top-left corner
			uvs[ iuv + 0 ] = x0;
			uvs[ iuv + 1 ] = y0;
			uvs[ iuv + 2 ] = x0 + d0x;
			uvs[ iuv + 3 ] = y0 + d0y;
			uvs[ iuv + 4 ] = x0 + d1x;
			uvs[ iuv + 5 ] = y0 + d1y;
			uvs[ iuv + 6 ] = x0 + d0x + d1x;
			uvs[ iuv + 7 ] = y0 + d0y + d1y;
			iuv += 8;

			// Top-right corner
			uvs[ iuv + 0 ] = x1 - d0x;
			uvs[ iuv + 1 ] = y1 - d0y;
			uvs[ iuv + 2 ] = x1;
			uvs[ iuv + 3 ] = y1;
			uvs[ iuv + 4 ] = x1 - d0x + d1x;
			uvs[ iuv + 5 ] = y1 - d0y + d1y;
			uvs[ iuv + 6 ] = x1 + d1x;
			uvs[ iuv + 7 ] = y1 + d1y;
			iuv += 8;

			// Bottom-left corner
			uvs[ iuv + 0 ] = x3 - d1x;
			uvs[ iuv + 1 ] = y3 - d1y;
			uvs[ iuv + 2 ] = x3 + d0x - d1x;
			uvs[ iuv + 3 ] = y3 + d0y - d1y;
			uvs[ iuv + 4 ] = x3;
			uvs[ iuv + 5 ] = y3;
			uvs[ iuv + 6 ] = x3 + d0x;
			uvs[ iuv + 7 ] = y3 + d0y;
			iuv += 8;

			// Bottom-right corner
			uvs[ iuv + 0 ] = x2 - d0x - d1x;
			uvs[ iuv + 1 ] = y2 - d0y - d1y;
			uvs[ iuv + 2 ] = x2 - d1x;
			uvs[ iuv + 3 ] = y2 - d1y;
			uvs[ iuv + 4 ] = x2 - d0x;
			uvs[ iuv + 5 ] = y2 - d0y;
			uvs[ iuv + 6 ] = x2;
			uvs[ iuv + 7 ] = y2;
			iuv += 8;

			// Top edge
			uvs[ iuv + 0 ] = x0 + d0x;
			uvs[ iuv + 1 ] = y0 + d0y;
			uvs[ iuv + 2 ] = x4;
			uvs[ iuv + 3 ] = y4;
			uvs[ iuv + 4 ] = x1 - d0x;
			uvs[ iuv + 5 ] = y1 - d0y;
			iuv += 6;

			// Top
			uvs[ iuv + 0 ] = x0 + d1x;
			uvs[ iuv + 1 ] = y0 + d1y;
			uvs[ iuv + 2 ] = x0 + d1x + d0x;
			uvs[ iuv + 3 ] = y0 + d1y + d0y;
			uvs[ iuv + 4 ] = x4 + d1x;
			uvs[ iuv + 5 ] = y4 + d1y;
			uvs[ iuv + 6 ] = x1 + d1x - d0x;
			uvs[ iuv + 7 ] = y1 + d1y - d0y;
			uvs[ iuv + 8 ] = x1 + d1x;
			uvs[ iuv + 9 ] = y1 + d1y;
			iuv += 10;

			// Middle
			const x02 = 0.5 * (x0 + x2);
			const y02 = 0.5 * (y0 + y2);
			uvs[ iuv + 0 ] = 0.5 * (x0 + x3);
			uvs[ iuv + 1 ] = 0.5 * (y0 + y3);
			uvs[ iuv + 2 ] = x02;
			uvs[ iuv + 3 ] = y02;
			uvs[ iuv + 4 ] = x02;
			uvs[ iuv + 5 ] = y02;
			uvs[ iuv + 6 ] = 0.5 * (x1 + x2);
			uvs[ iuv + 7 ] = 0.5 * (y1 + y2);
			iuv += 8;

			// Bottom
			uvs[ iuv + 0 ] = x3 - d1x;
			uvs[ iuv + 1 ] = y3 - d1y;
			uvs[ iuv + 2 ] = x3 - d1x + d0x;
			uvs[ iuv + 3 ] = y3 - d1y + d0y;
			uvs[ iuv + 4 ] = x5 - d1x;
			uvs[ iuv + 5 ] = y5 - d1y;
			uvs[ iuv + 6 ] = x2 - d1x - d0x;
			uvs[ iuv + 7 ] = y2 - d1y - d0y;
			uvs[ iuv + 8 ] = x2 - d1x;
			uvs[ iuv + 9 ] = y2 - d1y;
			iuv += 10;

			// Bottom edge
			uvs[ iuv + 0 ] = x3 + d0x;
			uvs[ iuv + 1 ] = y3 + d0y;
			uvs[ iuv + 2 ] = x5;
			uvs[ iuv + 3 ] = y5;
			uvs[ iuv + 4 ] = x2 - d0x;
			uvs[ iuv + 5 ] = y2 - d0y;
		}
	}
}
