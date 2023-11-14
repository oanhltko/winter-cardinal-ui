[Winter Cardinal UI - v0.374.0](../index.md) / EShapePrimitive

# Class: EShapePrimitive

## Hierarchy

- [`EShapeBase`](EShapeBase.md)

  ↳ **`EShapePrimitive`**

  ↳↳ [`EShapeCircle`](EShapeCircle.md)

  ↳↳ [`EShapeLabel`](EShapeLabel.md)

  ↳↳ [`EShapeLineBase`](EShapeLineBase.md)

  ↳↳ [`EShapeNull`](EShapeNull.md)

  ↳↳ [`EShapeRectangleRounded`](EShapeRectangleRounded.md)

  ↳↳ [`EShapeRectangle`](EShapeRectangle.md)

  ↳↳ [`EShapeSemicircle`](EShapeSemicircle.md)

  ↳↳ [`EShapeTriangleRounded`](EShapeTriangleRounded.md)

  ↳↳ [`EShapeTriangle`](EShapeTriangle.md)

## Table of contents

### Constructors

- [constructor](EShapePrimitive.md#constructor)

### Properties

- [\_bounds](EShapePrimitive.md#_bounds)
- [\_boundsInternal](EShapePrimitive.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapePrimitive.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapePrimitive.md#_boundslocal)
- [\_boundsLocalTransformId](EShapePrimitive.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapePrimitive.md#_boundstransformid)
- [\_capability](EShapePrimitive.md#_capability)
- [\_connector](EShapePrimitive.md#_connector)
- [\_corner](EShapePrimitive.md#_corner)
- [\_image](EShapePrimitive.md#_image)
- [\_lockTransform](EShapePrimitive.md#_locktransform)
- [\_lockTransformParent](EShapePrimitive.md#_locktransformparent)
- [\_lockUploaded](EShapePrimitive.md#_lockuploaded)
- [\_points](EShapePrimitive.md#_points)
- [\_radius](EShapePrimitive.md#_radius)
- [\_state](EShapePrimitive.md#_state)
- [\_visible](EShapePrimitive.md#_visible)
- [action](EShapePrimitive.md#action)
- [children](EShapePrimitive.md#children)
- [cursor](EShapePrimitive.md#cursor)
- [data](EShapePrimitive.md#data)
- [editor](EShapePrimitive.md#editor)
- [fill](EShapePrimitive.md#fill)
- [gradient](EShapePrimitive.md#gradient)
- [id](EShapePrimitive.md#id)
- [imageSrc](EShapePrimitive.md#imagesrc)
- [index](EShapePrimitive.md#index)
- [interactive](EShapePrimitive.md#interactive)
- [layout](EShapePrimitive.md#layout)
- [parent](EShapePrimitive.md#parent)
- [reference](EShapePrimitive.md#reference)
- [runtime](EShapePrimitive.md#runtime)
- [selected](EShapePrimitive.md#selected)
- [shortcut](EShapePrimitive.md#shortcut)
- [size](EShapePrimitive.md#size)
- [stroke](EShapePrimitive.md#stroke)
- [tag](EShapePrimitive.md#tag)
- [text](EShapePrimitive.md#text)
- [texture](EShapePrimitive.md#texture)
- [title](EShapePrimitive.md#title)
- [transform](EShapePrimitive.md#transform)
- [type](EShapePrimitive.md#type)
- [uploaded](EShapePrimitive.md#uploaded)
- [uuid](EShapePrimitive.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapePrimitive.md#work_hit_test_data)

### Accessors

- [capability](EShapePrimitive.md#capability)
- [connector](EShapePrimitive.md#connector)
- [corner](EShapePrimitive.md#corner)
- [image](EShapePrimitive.md#image)
- [points](EShapePrimitive.md#points)
- [radius](EShapePrimitive.md#radius)
- [root](EShapePrimitive.md#root)
- [state](EShapePrimitive.md#state)
- [visible](EShapePrimitive.md#visible)
- [worldVisible](EShapePrimitive.md#worldvisible)

### Methods

- [addListener](EShapePrimitive.md#addlistener)
- [addUuid](EShapePrimitive.md#adduuid)
- [attach](EShapePrimitive.md#attach)
- [blur](EShapePrimitive.md#blur)
- [clone](EShapePrimitive.md#clone)
- [contains](EShapePrimitive.md#contains)
- [containsAbs](EShapePrimitive.md#containsabs)
- [containsAbsBBox](EShapePrimitive.md#containsabsbbox)
- [containsBBox](EShapePrimitive.md#containsbbox)
- [containsChildren](EShapePrimitive.md#containschildren)
- [containsText](EShapePrimitive.md#containstext)
- [copy](EShapePrimitive.md#copy)
- [destroy](EShapePrimitive.md#destroy)
- [detach](EShapePrimitive.md#detach)
- [emit](EShapePrimitive.md#emit)
- [eventNames](EShapePrimitive.md#eventnames)
- [focus](EShapePrimitive.md#focus)
- [getBounds](EShapePrimitive.md#getbounds)
- [getBoundsInternal](EShapePrimitive.md#getboundsinternal)
- [getBoundsLocal](EShapePrimitive.md#getboundslocal)
- [getBoundsSize](EShapePrimitive.md#getboundssize)
- [getBounds\_](EShapePrimitive.md#getbounds_)
- [getCapability](EShapePrimitive.md#getcapability)
- [getHitTestSize](EShapePrimitive.md#gethittestsize)
- [getShapeScale](EShapePrimitive.md#getshapescale)
- [getStrokeWidthScale](EShapePrimitive.md#getstrokewidthscale)
- [listenerCount](EShapePrimitive.md#listenercount)
- [listeners](EShapePrimitive.md#listeners)
- [lock](EShapePrimitive.md#lock)
- [newFill](EShapePrimitive.md#newfill)
- [newSize](EShapePrimitive.md#newsize)
- [newStroke](EShapePrimitive.md#newstroke)
- [newText](EShapePrimitive.md#newtext)
- [newTransform](EShapePrimitive.md#newtransform)
- [off](EShapePrimitive.md#off)
- [on](EShapePrimitive.md#on)
- [onAttach](EShapePrimitive.md#onattach)
- [onChildTransformChange](EShapePrimitive.md#onchildtransformchange)
- [onDetach](EShapePrimitive.md#ondetach)
- [onKeyDown](EShapePrimitive.md#onkeydown)
- [onKeyUp](EShapePrimitive.md#onkeyup)
- [onParentTransformChange](EShapePrimitive.md#onparenttransformchange)
- [onRender](EShapePrimitive.md#onrender)
- [onSizeChange](EShapePrimitive.md#onsizechange)
- [onStateChange](EShapePrimitive.md#onstatechange)
- [onTransformChange](EShapePrimitive.md#ontransformchange)
- [onTransformChange\_](EShapePrimitive.md#ontransformchange_)
- [once](EShapePrimitive.md#once)
- [removeAllListeners](EShapePrimitive.md#removealllisteners)
- [removeListener](EShapePrimitive.md#removelistener)
- [select](EShapePrimitive.md#select)
- [serialize](EShapePrimitive.md#serialize)
- [serializeChildren](EShapePrimitive.md#serializechildren)
- [serializeGradient](EShapePrimitive.md#serializegradient)
- [serializeImage](EShapePrimitive.md#serializeimage)
- [serializeState](EShapePrimitive.md#serializestate)
- [setFocused](EShapePrimitive.md#setfocused)
- [toDirty](EShapePrimitive.md#todirty)
- [toGlobal](EShapePrimitive.md#toglobal)
- [toHitTestData](EShapePrimitive.md#tohittestdata)
- [toLocal](EShapePrimitive.md#tolocal)
- [unlock](EShapePrimitive.md#unlock)
- [update](EShapePrimitive.md#update)
- [updateRecursively](EShapePrimitive.md#updaterecursively)
- [updateTransform](EShapePrimitive.md#updatetransform)
- [updateUploaded](EShapePrimitive.md#updateuploaded)
- [updateUuid](EShapePrimitive.md#updateuuid)

## Constructors

### constructor

• **new EShapePrimitive**(`type`): [`EShapePrimitive`](EShapePrimitive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Overrides

[EShapeBase](EShapeBase.md).[constructor](EShapeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L35)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_bounds](EShapeBase.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsInternal](EShapeBase.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsInternalTransformId](EShapeBase.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsLocal](EShapeBase.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsLocalTransformId](EShapeBase.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsTransformId](EShapeBase.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_capability](EShapeBase.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_connector](EShapeBase.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Overrides

[EShapeBase](EShapeBase.md).[_image](EShapeBase.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### \_lockTransform

• `Protected` **\_lockTransform**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockTransform](EShapeBase.md#_locktransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockTransformParent](EShapeBase.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockUploaded](EShapeBase.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_points](EShapeBase.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_state](EShapeBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[_visible](EShapeBase.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[action](EShapeBase.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[children](EShapeBase.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[cursor](EShapeBase.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Overrides

[EShapeBase](EShapeBase.md).[data](EShapeBase.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[editor](EShapeBase.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Overrides

[EShapeBase](EShapeBase.md).[fill](EShapeBase.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L24)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Overrides

[EShapeBase](EShapeBase.md).[gradient](EShapeBase.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### id

• **id**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[id](EShapeBase.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[imageSrc](EShapeBase.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### index

• **index**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[index](EShapeBase.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[interactive](EShapeBase.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[layout](EShapeBase.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[parent](EShapeBase.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[reference](EShapeBase.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[runtime](EShapeBase.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[selected](EShapeBase.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[shortcut](EShapeBase.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### size

• `Readonly` **size**: `IPoint`

#### Overrides

[EShapeBase](EShapeBase.md).[size](EShapeBase.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L23)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Overrides

[EShapeBase](EShapeBase.md).[stroke](EShapeBase.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L25)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeBar.md#data)

#### Overrides

[EShapeBase](EShapeBase.md).[tag](EShapeBase.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Overrides

[EShapeBase](EShapeBase.md).[text](EShapeBase.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeBase](EShapeBase.md).[texture](EShapeBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L66)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[title](EShapeBase.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[transform](EShapeBase.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[type](EShapeBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[uploaded](EShapeBase.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[uuid](EShapeBase.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[WORK_HIT_TEST_DATA](EShapeBase.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeBase.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L793)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeBase.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L274)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Overrides

EShapeBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L89)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Overrides

EShapeBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L93)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Overrides

EShapeBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L111)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Overrides

EShapeBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L115)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

EShapeBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L262)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Overrides

EShapeBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L100)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Overrides

EShapeBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L104)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeBase.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L266)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:782](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L782)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L283)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

EShapeBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeBase.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L301)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapePrimitive`](EShapePrimitive.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[addListener](EShapeBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### addUuid

▸ **addUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[addUuid](EShapeBase.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L479)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapePrimitive`](EShapePrimitive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[attach](EShapeBase.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L324)

___

### blur

▸ **blur**(): [`EShapePrimitive`](EShapePrimitive.md)

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[blur](EShapeBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### clone

▸ **clone**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Overrides

[EShapeBase](EShapeBase.md).[clone](EShapeBase.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L87)

___

### contains

▸ **contains**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[contains](EShapeBase.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L552)

___

### containsAbs

▸ **containsAbs**(`x`, `y`, `ax`, `ay`, `sw`, `ss`, `sa`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[containsAbs](EShapeBase.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:619](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L619)

___

### containsAbsBBox

▸ **containsAbsBBox**(`x`, `y`, `ax`, `ay`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[containsAbsBBox](EShapeBase.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L631)

___

### containsBBox

▸ **containsBBox**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[containsBBox](EShapeBase.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L614)

___

### containsChildren

▸ **containsChildren**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[containsChildren](EShapeBase.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L591)

___

### containsText

▸ **containsText**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[containsText](EShapeBase.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L570)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapePrimitive`](EShapePrimitive.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[copy](EShapeBase.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:865](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L865)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[destroy](EShapeBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L758)

___

### detach

▸ **detach**(`exceptions?`): [`EShapePrimitive`](EShapePrimitive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[detach](EShapeBase.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L352)

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

[EShapeBase](EShapeBase.md).[emit](EShapeBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[eventNames](EShapeBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapePrimitive`](EShapePrimitive.md)

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[focus](EShapeBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:806](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L806)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `result?`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `result?` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[getBounds](EShapeBase.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L661)

___

### getBoundsInternal

▸ **getBoundsInternal**(`skipUpdate?`, `result?`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `result?` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[getBoundsInternal](EShapeBase.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L677)

___

### getBoundsLocal

▸ **getBoundsLocal**(`skipUpdate?`, `result?`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `result?` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[getBoundsLocal](EShapeBase.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:693](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L693)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeBase](EShapeBase.md).[getBoundsSize](EShapeBase.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L709)

___

### getBounds\_

▸ **getBounds_**(`transform`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[getBounds_](EShapeBase.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:713](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L713)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[getCapability](EShapeBase.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:802](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L802)

___

### getHitTestSize

▸ **getHitTestSize**(`result`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md) |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[getHitTestSize](EShapeBase.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L520)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[getShapeScale](EShapeBase.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)

___

### getStrokeWidthScale

▸ **getStrokeWidthScale**(`style`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[getStrokeWidthScale](EShapeBase.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L504)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[listenerCount](EShapeBase.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[EShapeBase](EShapeBase.md).[listeners](EShapeBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### lock

▸ **lock**(`part`): [`EShapePrimitive`](EShapePrimitive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[lock](EShapeBase.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L59)

___

### newSize

▸ **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L48)

___

### newStroke

▸ **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L63)

___

### newText

▸ **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L76)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[newTransform](EShapeBase.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapePrimitive`](EShapePrimitive.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[off](EShapeBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapePrimitive`](EShapePrimitive.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[on](EShapeBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onAttach](EShapeBase.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L339)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onChildTransformChange](EShapeBase.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L234)

___

### onDetach

▸ **onDetach**(`exceptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onDetach](EShapeBase.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L368)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[onKeyDown](EShapeBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:825](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L825)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[onKeyUp](EShapeBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:833](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L833)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onParentTransformChange](EShapeBase.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L176)

___

### onRender

▸ **onRender**(`time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onRender](EShapeBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L849)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onSizeChange](EShapeBase.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L148)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onStateChange](EShapeBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L767)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onTransformChange](EShapeBase.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L171)

___

### onTransformChange\_

▸ **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onTransformChange_](EShapeBase.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L191)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapePrimitive`](EShapePrimitive.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[once](EShapeBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapePrimitive`](EShapePrimitive.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[removeAllListeners](EShapeBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapePrimitive`](EShapePrimitive.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[removeListener](EShapeBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### select

▸ **select**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[select](EShapeBase.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L635)

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[serialize](EShapeBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L425)

___

### serializeChildren

▸ **serializeChildren**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[serializeChildren](EShapeBase.md#serializechildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L394)

___

### serializeGradient

▸ **serializeGradient**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[serializeGradient](EShapeBase.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:409](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L409)

___

### serializeImage

▸ **serializeImage**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[serializeImage](EShapeBase.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L404)

___

### serializeState

▸ **serializeState**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[serializeState](EShapeBase.md#serializestate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L420)

___

### setFocused

▸ **setFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[setFocused](EShapeBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L816)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[toDirty](EShapeBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### toGlobal

▸ **toGlobal**(`position`, `result`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `result` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Inherited from

[EShapeBase](EShapeBase.md).[toGlobal](EShapeBase.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L640)

___

### toHitTestData

▸ **toHitTestData**(`x`, `y`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[toHitTestData](EShapeBase.md#tohittestdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L527)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `result?`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `from?` | `DisplayObject` |
| `result?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Inherited from

[EShapeBase](EShapeBase.md).[toLocal](EShapeBase.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L649)

___

### unlock

▸ **unlock**(`part`, `invoke`): [`EShapePrimitive`](EShapePrimitive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |
| `invoke` | `boolean` |

#### Returns

[`EShapePrimitive`](EShapePrimitive.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[unlock](EShapeBase.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L214)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[update](EShapeBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:842](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L842)

___

### updateRecursively

▸ **updateRecursively**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateRecursively](EShapeBase.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:856](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L856)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateTransform](EShapeBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L381)

___

### updateUploaded

▸ **updateUploaded**(`recursively?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateUploaded](EShapeBase.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L238)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateUuid](EShapeBase.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L487)
