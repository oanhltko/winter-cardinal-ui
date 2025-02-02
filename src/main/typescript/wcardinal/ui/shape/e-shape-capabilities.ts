/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeCapability } from "./e-shape-capability";
import { EShapeType } from "./e-shape-type";

export class EShapeCapabilities {
	static mappings: { [ type: number ]: EShapeCapability } = {};

	static get( type: EShapeType ): EShapeCapability {
		return this.mappings[ type ] || EShapeCapability.PRIMITIVE;
	}

	static contains( shape: EShape | null | undefined, capability: EShapeCapability ): shape is EShape {
		if( shape != null ) {
			if( this.get( shape.type ) & capability ) {
				return true;
			}

			const children = shape.children;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				if( this.contains( children[ i ], capability ) ) {
					return true;
				}
			}
		}
		return false;
	}

	static set( type: EShapeType, capability: EShapeCapability ): void {
		this.mappings[ type ] = capability;
	}
}
