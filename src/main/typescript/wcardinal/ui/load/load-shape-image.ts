/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeImages } from "../shape/variant/e-shape-images";
import { EShapeRectangleUploadeds } from "../shape/variant/e-shape-rectangle-uploadeds";

export const loadShapeImage = () => {
	EShapeUploadeds[ EShapeType.IMAGE ] = EShapeRectangleUploadeds.create;
	EShapeDeserializers[ EShapeType.IMAGE ] = EShapeImages.deserialize;
};
