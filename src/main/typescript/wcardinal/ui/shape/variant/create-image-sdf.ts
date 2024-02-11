/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicSDFFontGenerator } from "../../util/dynamic-sdf-font-generator";
import { EShapeImageSdf } from "./e-shape-image-sdf";
import { toImageElement } from "./to-image-element";

export const createImageSdf = (dataUrl: string, convertToSdf: boolean): Promise<EShapeImageSdf> => {
	if (convertToSdf) {
		return toImageElement(dataUrl).then((image): Promise<EShapeImageSdf> => {
			const generator = DynamicSDFFontGenerator.getInstance().init();
			generator.updateTexture(image.width, image.height, image.source);
			generator.render();

			const canvas = document.createElement("canvas");
			generator.read(canvas);

			return createImageSdf(canvas.toDataURL(), false);
		});
	} else {
		return toImageElement(dataUrl).then((image): EShapeImageSdf => {
			return new EShapeImageSdf(image);
		});
	}
};
