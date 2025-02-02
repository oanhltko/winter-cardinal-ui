/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeCircle } from "./e-shape-circle";

export class EShapeCircles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeCircle> | EShapeCircle {
		return EShapeDeserializer.deserialize( item, manager, EShapeCircles.create() );
	}

	static create(): EShapeCircle {
		return new EShapeCircle();
	}
}
