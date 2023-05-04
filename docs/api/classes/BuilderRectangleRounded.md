[Winter Cardinal UI - v0.310.1](../index.md) / BuilderRectangleRounded

# Class: BuilderRectangleRounded

## Hierarchy

- [`BuilderBase`](BuilderBase.md)

  ↳ **`BuilderRectangleRounded`**

## Table of contents

### Constructors

- [constructor](BuilderRectangleRounded.md#constructor)

### Properties

- [alphaFill](BuilderRectangleRounded.md#alphafill)
- [alphaStroke](BuilderRectangleRounded.md#alphastroke)
- [colorFill](BuilderRectangleRounded.md#colorfill)
- [colorStroke](BuilderRectangleRounded.md#colorstroke)
- [corner](BuilderRectangleRounded.md#corner)
- [indexCount](BuilderRectangleRounded.md#indexcount)
- [indexOffset](BuilderRectangleRounded.md#indexoffset)
- [radius](BuilderRectangleRounded.md#radius)
- [sizeX](BuilderRectangleRounded.md#sizex)
- [sizeY](BuilderRectangleRounded.md#sizey)
- [strokeAlign](BuilderRectangleRounded.md#strokealign)
- [strokeSide](BuilderRectangleRounded.md#strokeside)
- [strokeStyle](BuilderRectangleRounded.md#strokestyle)
- [strokeWidth](BuilderRectangleRounded.md#strokewidth)
- [texture](BuilderRectangleRounded.md#texture)
- [textureTransformId](BuilderRectangleRounded.md#texturetransformid)
- [transformLocalId](BuilderRectangleRounded.md#transformlocalid)
- [vertexCount](BuilderRectangleRounded.md#vertexcount)
- [vertexOffset](BuilderRectangleRounded.md#vertexoffset)

### Methods

- [buildUnit](BuilderRectangleRounded.md#buildunit)
- [init](BuilderRectangleRounded.md#init)
- [isCompatible](BuilderRectangleRounded.md#iscompatible)
- [update](BuilderRectangleRounded.md#update)
- [updateColorFill](BuilderRectangleRounded.md#updatecolorfill)
- [updateColorStroke](BuilderRectangleRounded.md#updatecolorstroke)
- [updateVertexClippingStepAndUv](BuilderRectangleRounded.md#updatevertexclippingstepanduv)

## Constructors

### constructor

• **new BuilderRectangleRounded**(`vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |

#### Overrides

[BuilderBase](BuilderBase.md).[constructor](BuilderBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts#L24)

## Properties

### alphaFill

• `Protected` **alphaFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaFill](BuilderBase.md#alphafill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L32)

___

### alphaStroke

• `Protected` **alphaStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[alphaStroke](BuilderBase.md#alphastroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L34)

___

### colorFill

• `Protected` **colorFill**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorFill](BuilderBase.md#colorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L31)

___

### colorStroke

• `Protected` **colorStroke**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[colorStroke](BuilderBase.md#colorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L33)

___

### corner

• `Protected` **corner**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts#L22)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexCount](BuilderBase.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L19)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[indexOffset](BuilderBase.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L18)

___

### radius

• `Protected` **radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts#L21)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeX](BuilderBase.md#sizex)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L21)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[sizeY](BuilderBase.md#sizey)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L22)

___

### strokeAlign

• `Protected` **strokeAlign**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeAlign](BuilderBase.md#strokealign)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L26)

___

### strokeSide

• `Protected` **strokeSide**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeSide](BuilderBase.md#strokeside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L28)

___

### strokeStyle

• `Protected` **strokeStyle**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeStyle](BuilderBase.md#strokestyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L29)

___

### strokeWidth

• `Protected` **strokeWidth**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[strokeWidth](BuilderBase.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L27)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Inherited from

[BuilderBase](BuilderBase.md).[texture](BuilderBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[textureTransformId](BuilderBase.md#texturetransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[transformLocalId](BuilderBase.md#transformlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L24)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexCount](BuilderBase.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L17)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Inherited from

[BuilderBase](BuilderBase.md).[vertexOffset](BuilderBase.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L16)

## Methods

### buildUnit

▸ **buildUnit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md) |

#### Returns

`void`

#### Inherited from

[BuilderBase](BuilderBase.md).[buildUnit](BuilderBase.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L105)

___

### init

▸ **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |

#### Returns

`void`

#### Overrides

[BuilderBase](BuilderBase.md).[init](BuilderBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts#L35)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Inherited from

[BuilderBase](BuilderBase.md).[isCompatible](BuilderBase.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L71)

___

### update

▸ **update**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Overrides

[BuilderBase](BuilderBase.md).[update](BuilderBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts#L40)

___

### updateColorFill

▸ `Protected` **updateColorFill**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderBase](BuilderBase.md).[updateColorFill](BuilderBase.md#updatecolorfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L77)

___

### updateColorStroke

▸ `Protected` **updateColorStroke**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Inherited from

[BuilderBase](BuilderBase.md).[updateColorStroke](BuilderBase.md#updatecolorstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-base.ts#L91)

___

### updateVertexClippingStepAndUv

▸ `Protected` **updateVertexClippingStepAndUv**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-rectangle-rounded.ts#L46)
