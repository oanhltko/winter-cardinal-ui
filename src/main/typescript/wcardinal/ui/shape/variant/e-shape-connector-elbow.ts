/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeConnectorBody } from "../e-shape-connector-body";
import { EShapeConnectorLine } from "./e-shape-connector-line";
import { EShapeConnectorEdge } from "../e-shape-connector-edge";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeConnectorElbowPointsFiller } from "./e-shape-connector-elbow-points-filler";

export class EShapeConnectorElbow extends EShapeConnectorLine {
	constructor(type: EShapeType = EShapeType.CONNECTOR_ELBOW) {
		super(type);
	}

	protected fillPoints(
		tail: EShapeConnectorEdge,
		tailMargin: number,
		head: EShapeConnectorEdge,
		headMargin: number,
		body: EShapeConnectorBody,
		px: number,
		py: number,
		values: number[]
	): void {
		// Tail
		const tailLocal = tail.local;
		const tailLocalX = tailLocal.x;
		const tailLocalY = tailLocal.y;
		const tailNormal = tail.normal;
		const tailNormalX = tailNormal.x;
		const tailNormalY = tailNormal.y;
		const tailSide = tail.side;

		// Head
		const headLocal = head.local;
		const headLocalX = headLocal.x;
		const headLocalY = headLocal.y;
		const headNormal = head.normal;
		const headNormalX = headNormal.x;
		const headNormalY = headNormal.y;
		const headSide = head.side;

		// Body
		const bodyValues = body.values;
		const bodyValuesLength = bodyValues.length;

		// Values
		const x0 = tailLocalX - px;
		const y0 = tailLocalY - py;
		const x1 = headLocalX - px;
		const y1 = headLocalY - py;

		const cx = (x1 + x0) * 0.5;
		const cy = (y1 + y0) * 0.5;
		const dx = x1 - x0;
		const dy = y1 - y0;
		const sxh = 0.5 * EShapeDefaults.SIZE_X;
		const syh = 0.5 * EShapeDefaults.SIZE_Y;

		const threshold = 0.000001;
		if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
			values[0] = x0;
			values[1] = y0;
			values[2] = x1;
			values[3] = y1;
			values.length = 4;
		} else {
			const filler = new EShapeConnectorElbowPointsFiller(x0, y0, values);
			if (0 < bodyValuesLength) {
				const a = Math.atan2(dy, dx);
				const l = Math.sqrt(dx * dx + dy * dy);
				const c = Math.cos(a) * l;
				const s = Math.sin(a) * l;
				const x3 = bodyValues[0];
				const y3 = bodyValues[1];
				const x4 = cx + c * x3 - s * y3;
				const y4 = cy + c * y3 + s * x3;
				filler.tail(x4, y4, tailNormalX, tailNormalY, sxh, syh, tailMargin, tailSide);
				for (let i = 2; i < bodyValuesLength; i += 2) {
					const x = bodyValues[i + 0];
					const y = bodyValues[i + 1];
					const x5 = cx + c * x - s * y;
					const y5 = cy + c * y + s * x;
					filler.middle(x5, y5);
				}
				filler.head(x1, y1, headNormalX, headNormalY, sxh, syh, headMargin, headSide);
			} else {
				filler.tail(cx, cy, tailNormalX, tailNormalY, sxh, syh, tailMargin, tailSide);
				filler.head(x1, y1, headNormalX, headNormalY, sxh, syh, headMargin, headSide);
			}
			filler.margin(tailMargin, headMargin);
		}
	}
}
