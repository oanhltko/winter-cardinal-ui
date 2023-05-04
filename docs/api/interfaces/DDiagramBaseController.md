[Winter Cardinal UI - v0.310.1](../index.md) / DDiagramBaseController

# Interface: DDiagramBaseController

[DDiagram](../classes/DDiagram.md) controller.

## Hierarchy

- **`DDiagramBaseController`**

  ↳ [`DDiagramController`](DDiagramController.md)

  ↳ [`DDiagramEditorController`](DDiagramEditorController.md)

## Table of contents

### Properties

- [piece](DDiagramBaseController.md#piece)

### Methods

- [getByName](DDiagramBaseController.md#getbyname)

## Properties

### piece

• **piece**: [`DDiagramBasePieceController`](DDiagramBasePieceController.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L33)

## Methods

### getByName

▸ **getByName**(`name`): `Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L34)
