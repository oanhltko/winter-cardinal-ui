/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { extract, Matrix, Renderer, RenderTexture, SCALE_MODES, utils } from "pixi.js";
import { DApplications } from "../d-applications";
import { DBase } from "../d-base";
import { UtilExtractorPixels } from "./util-extractor-pixels";

export class UtilExtractor {
	static toTexture(
		target: DBase, resolution?: number,
		clear?: boolean, skipUpdateTransform?: boolean
	): RenderTexture {
		const result = RenderTexture.create({
			width: target.width,
			height: target.height,
			scaleMode: SCALE_MODES.LINEAR,
			resolution
		});
		const matrix = new Matrix(
			undefined, undefined, undefined, undefined,
			-target.position.x, -target.position.y
		);
		const layer = DApplications.getLayer( target );
		if( layer ) {
			layer.renderer.render( target, result, clear, matrix, skipUpdateTransform );
		}
		return result;
	}

	static toPixels( renderTexture: RenderTexture, renderer: Renderer ): UtilExtractorPixels {
		const resolution = renderTexture.resolution;
		const frame = renderTexture.frame;
		const width = Math.floor( frame.width * resolution );
		const height = Math.floor( frame.height * resolution );
		const pixels = new Uint8Array( 4 * width * height );

		renderer.renderTexture.bind( renderTexture );
		const gl = (renderer as any).gl;
		gl.readPixels(
			frame.x * resolution,
			frame.y * resolution,
			width,
			height,
			gl.RGBA,
			gl.UNSIGNED_BYTE,
			pixels
		);

		return {
			width,
			height,
			array: pixels
		};
	}

	static toCanvas( pixels: UtilExtractorPixels, scale?: number, ignorePremutipliedAlpha?: boolean ): HTMLCanvasElement {
		const width = pixels.width;
		const height = pixels.height;
		const array = pixels.array;
		const canvasRenderTarget = new utils.CanvasRenderTarget( width, height, 1 );

		const imageData = canvasRenderTarget.context.getImageData( 0, 0, width, height );
		if( ignorePremutipliedAlpha ) {
			imageData.data.set( array );
		} else {
			(extract.Extract as any).arrayPostDivide( array, imageData.data );
		}
		canvasRenderTarget.context.putImageData( imageData, 0, 0 );

		// Scale down
		if( scale != null && scale !== 1 ) {
			canvasRenderTarget.context.scale( scale, scale );
			canvasRenderTarget.context.drawImage( canvasRenderTarget.canvas, 0, 0 );
			const scaledWidth = Math.floor( width * scale );
			const scaledHeight = Math.floor( height * scale );
			const scaledImageData = canvasRenderTarget.context.getImageData( 0, 0, scaledWidth, scaledHeight );
			canvasRenderTarget.resize( scaledWidth, scaledHeight );
			canvasRenderTarget.context.putImageData( scaledImageData, 0, 0 );
		}

		return canvasRenderTarget.canvas;
	}

	static toBase64( canvas: HTMLCanvasElement, format?: string, quality?: number ): string {
		return canvas.toDataURL( format, quality );
	}
}
