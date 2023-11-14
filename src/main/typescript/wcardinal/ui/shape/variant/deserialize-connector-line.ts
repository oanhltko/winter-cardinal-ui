/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeConnectorBodies } from "../e-shape-connector-bodies";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeUuidMapping } from "../e-shape-uuid-mapping";
import { deserializeBase } from "./deserialize-base";
import { EShapeConnectorLine } from "./e-shape-connector-line";
import { EShapeLockPart } from "./e-shape-lock-part";

export const deserializeConnectorLine = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeConnectorLine
): Promise<EShapeConnectorLine> | EShapeConnectorLine => {
	return deserializeBase(item, manager, shape || new EShapeConnectorLine());
};

export const onDeserializedConnectorLine = (
	item: DDiagramSerializedItem,
	shape: EShape,
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
): void => {
	if (shape instanceof EShapeConnectorLine) {
		const resources = manager.resources;
		const resourceId = item[15];
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<[number, number, number?]>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as [number, number, number?];
				manager.setExtension(resourceId, parsed);
			}

			// Lock
			shape.lock(EShapeLockPart.CONNECTOR);

			// Points
			const points = shape.points;
			points.deserialize(parsed[1], manager);

			// Edge
			const edge = shape.edge;
			edge.deserialize(parsed[0], mapping, manager);

			// Body
			const body = shape.body;
			const bodyId = parsed[2];
			if (bodyId != null) {
				body.deserialize(bodyId, mapping, manager);
			} else {
				// The following is for backward compatibility.
				body.set(
					EShapeConnectorBodies.from(points.values, edge.tail.margin, edge.head.margin)
				);
			}

			// Unlock
			shape.unlock(EShapeLockPart.CONNECTOR, true);
		}
	}
};
