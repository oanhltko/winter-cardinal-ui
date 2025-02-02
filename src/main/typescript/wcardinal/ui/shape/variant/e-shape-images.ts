/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeImageElements } from "../e-shape-image-elements";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeImage } from "./e-shape-image";

export class EShapeImages {
	static from( dataUrl: string ): Promise<EShapeImage> {
		return EShapeImageElements.toImageElement( dataUrl ).then(( imageElement: HTMLImageElement ) => {
			return new EShapeImage( imageElement );
		});
	}

	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeImage> | EShapeImage {
		return EShapeDeserializer.deserialize( item, manager, EShapeImages.create() );
	}

	static create(): EShapeImage {
		return new EShapeImage();
	}
}
