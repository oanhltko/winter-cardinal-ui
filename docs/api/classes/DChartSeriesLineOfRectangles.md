[Winter Cardinal UI - v0.310.1](../index.md) / DChartSeriesLineOfRectangles

# Class: DChartSeriesLineOfRectangles<CHART\>

A series represents a line of rectangles.
Data points must be sorted in ascending order on the X axis.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Hierarchy

- [`DChartSeriesLineOfAny`](DChartSeriesLineOfAny.md)<`CHART`\>

  ↳ **`DChartSeriesLineOfRectangles`**

## Table of contents

### Constructors

- [constructor](DChartSeriesLineOfRectangles.md#constructor)

### Properties

- [\_container](DChartSeriesLineOfRectangles.md#_container)
- [\_coordinate](DChartSeriesLineOfRectangles.md#_coordinate)
- [\_domain](DChartSeriesLineOfRectangles.md#_domain)
- [\_fill](DChartSeriesLineOfRectangles.md#_fill)
- [\_index](DChartSeriesLineOfRectangles.md#_index)
- [\_isShown](DChartSeriesLineOfRectangles.md#_isshown)
- [\_line](DChartSeriesLineOfRectangles.md#_line)
- [\_offset](DChartSeriesLineOfRectangles.md#_offset)
- [\_options](DChartSeriesLineOfRectangles.md#_options)
- [\_pointId](DChartSeriesLineOfRectangles.md#_pointid)
- [\_pointIdUpdated](DChartSeriesLineOfRectangles.md#_pointidupdated)
- [\_points](DChartSeriesLineOfRectangles.md#_points)
- [\_range](DChartSeriesLineOfRectangles.md#_range)
- [\_regionPointId](DChartSeriesLineOfRectangles.md#_regionpointid)
- [\_size](DChartSeriesLineOfRectangles.md#_size)
- [\_state](DChartSeriesLineOfRectangles.md#_state)
- [\_stroke](DChartSeriesLineOfRectangles.md#_stroke)
- [WORK](DChartSeriesLineOfRectangles.md#work)
- [WORK\_REGION](DChartSeriesLineOfRectangles.md#work_region)

### Accessors

- [container](DChartSeriesLineOfRectangles.md#container)
- [coordinate](DChartSeriesLineOfRectangles.md#coordinate)
- [domain](DChartSeriesLineOfRectangles.md#domain)
- [index](DChartSeriesLineOfRectangles.md#index)
- [points](DChartSeriesLineOfRectangles.md#points)
- [range](DChartSeriesLineOfRectangles.md#range)
- [shape](DChartSeriesLineOfRectangles.md#shape)
- [state](DChartSeriesLineOfRectangles.md#state)

### Methods

- [addListener](DChartSeriesLineOfRectangles.md#addlistener)
- [adjustLineRegion](DChartSeriesLineOfRectangles.md#adjustlineregion)
- [applyLine](DChartSeriesLineOfRectangles.md#applyline)
- [bind](DChartSeriesLineOfRectangles.md#bind)
- [calcHitPoint](DChartSeriesLineOfRectangles.md#calchitpoint)
- [calcHitPointHitTester](DChartSeriesLineOfRectangles.md#calchitpointhittester)
- [calcHitPointTestRange](DChartSeriesLineOfRectangles.md#calchitpointtestrange)
- [calcRegion](DChartSeriesLineOfRectangles.md#calcregion)
- [destroy](DChartSeriesLineOfRectangles.md#destroy)
- [doUpdate](DChartSeriesLineOfRectangles.md#doupdate)
- [doUpdateLine](DChartSeriesLineOfRectangles.md#doupdateline)
- [emit](DChartSeriesLineOfRectangles.md#emit)
- [eventNames](DChartSeriesLineOfRectangles.md#eventnames)
- [getOffsetDefault](DChartSeriesLineOfRectangles.md#getoffsetdefault)
- [getSizeDefault](DChartSeriesLineOfRectangles.md#getsizedefault)
- [hide](DChartSeriesLineOfRectangles.md#hide)
- [hitTest](DChartSeriesLineOfRectangles.md#hittest)
- [initLine](DChartSeriesLineOfRectangles.md#initline)
- [isHidden](DChartSeriesLineOfRectangles.md#ishidden)
- [isShown](DChartSeriesLineOfRectangles.md#isshown)
- [listenerCount](DChartSeriesLineOfRectangles.md#listenercount)
- [listeners](DChartSeriesLineOfRectangles.md#listeners)
- [newLineOfAny](DChartSeriesLineOfRectangles.md#newlineofany)
- [off](DChartSeriesLineOfRectangles.md#off)
- [on](DChartSeriesLineOfRectangles.md#on)
- [onHide](DChartSeriesLineOfRectangles.md#onhide)
- [onRender](DChartSeriesLineOfRectangles.md#onrender)
- [onShow](DChartSeriesLineOfRectangles.md#onshow)
- [onStateChange](DChartSeriesLineOfRectangles.md#onstatechange)
- [once](DChartSeriesLineOfRectangles.md#once)
- [removeAllListeners](DChartSeriesLineOfRectangles.md#removealllisteners)
- [removeListener](DChartSeriesLineOfRectangles.md#removelistener)
- [show](DChartSeriesLineOfRectangles.md#show)
- [toDirty](DChartSeriesLineOfRectangles.md#todirty)
- [unbind](DChartSeriesLineOfRectangles.md#unbind)
- [update](DChartSeriesLineOfRectangles.md#update)
- [updateRegion](DChartSeriesLineOfRectangles.md#updateregion)

## Constructors

### constructor

• **new DChartSeriesLineOfRectangles**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md) |

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[constructor](DChartSeriesLineOfAny.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L71)

## Properties

### \_container

• `Protected` `Optional` **\_container**: [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_container](DChartSeriesLineOfAny.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L39)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartSeriesBaseCoordinateContainer`](DChartSeriesBaseCoordinateContainer.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_coordinate](DChartSeriesLineOfAny.md#_coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L37)

___

### \_domain

• `Protected` **\_domain**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_domain](DChartSeriesLineOfAny.md#_domain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L42)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`DChartSeriesFillComputed`](../interfaces/DChartSeriesFillComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_fill](DChartSeriesLineOfAny.md#_fill)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L67)

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_index](DChartSeriesLineOfAny.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L40)

___

### \_isShown

• `Protected` **\_isShown**: `boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_isShown](DChartSeriesLineOfAny.md#_isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L47)

___

### \_line

• `Protected` **\_line**: ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_line](DChartSeriesLineOfAny.md#_line)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L60)

___

### \_offset

• `Protected` `Optional` **\_offset**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_offset](DChartSeriesLineOfAny.md#_offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L69)

___

### \_options

• `Protected` `Optional` **\_options**: [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_options](DChartSeriesLineOfAny.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L61)

___

### \_pointId

• `Protected` **\_pointId**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_pointId](DChartSeriesLineOfAny.md#_pointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L63)

___

### \_pointIdUpdated

• `Protected` **\_pointIdUpdated**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_pointIdUpdated](DChartSeriesLineOfAny.md#_pointidupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L64)

___

### \_points

• `Protected` **\_points**: (``null`` \| `number`)[]

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_points](DChartSeriesLineOfAny.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L62)

___

### \_range

• `Protected` **\_range**: [`DChartRegionImpl`](DChartRegionImpl.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_range](DChartSeriesLineOfAny.md#_range)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L43)

___

### \_regionPointId

• `Protected` **\_regionPointId**: `number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_regionPointId](DChartSeriesLineOfAny.md#_regionpointid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L44)

___

### \_size

• `Protected` `Optional` **\_size**: [`DChartSeriesPointComputed`](../interfaces/DChartSeriesPointComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_size](DChartSeriesLineOfAny.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L68)

___

### \_state

• `Protected` **\_state**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_state](DChartSeriesLineOfAny.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L46)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`DChartSeriesStrokeComputed`](../interfaces/DChartSeriesStrokeComputed.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[_stroke](DChartSeriesLineOfAny.md#_stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L66)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[WORK](DChartSeriesLineOfAny.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L57)

___

### WORK\_REGION

▪ `Static` `Protected` `Optional` **WORK\_REGION**: [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[WORK_REGION](DChartSeriesLineOfAny.md#work_region)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L58)

## Accessors

### container

• `get` **container**(): ``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Returns

``null`` \| [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesLineOfAny.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L108)

___

### coordinate

• `get` **coordinate**(): [`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesCoordinateContainer`](../interfaces/DChartSeriesCoordinateContainer.md)<`CHART`\>

#### Inherited from

DChartSeriesLineOfAny.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L116)

___

### domain

• `get` **domain**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesLineOfAny.domain

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L98)

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

DChartSeriesLineOfAny.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L112)

___

### points

• `get` **points**(): (``null`` \| `number`)[]

#### Returns

(``null`` \| `number`)[]

#### Inherited from

DChartSeriesLineOfAny.points

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L147)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |

#### Returns

`void`

#### Inherited from

DChartSeriesLineOfAny.points

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L151)

___

### range

• `get` **range**(): [`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Returns

[`DChartRegionImmutable`](../interfaces/DChartRegionImmutable.md)

#### Inherited from

DChartSeriesLineOfAny.range

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L103)

___

### shape

• `get` **shape**(): ``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

``null`` \| [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Inherited from

DChartSeriesLineOfAny.shape

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L143)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartSeriesLineOfAny.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L120)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[addListener](DChartSeriesLineOfAny.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### adjustLineRegion

▸ `Protected` **adjustLineRegion**(`xmin`, `xmax`, `ymin`, `ymax`, `result`): [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xmin` | `number` |
| `xmax` | `number` |
| `ymin` | `number` |
| `ymax` | `number` |
| `result` | [`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md) |

#### Returns

[`DChartSeriesLineOfAnyRegion`](../interfaces/DChartSeriesLineOfAnyRegion.md)

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[adjustLineRegion](DChartSeriesLineOfAny.md#adjustlineregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L277)

___

### applyLine

▸ `Protected` **applyLine**(`line`, `xcoordinate`, `ycoordinate`, `sx`, `sy`, `cx`, `cy`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `sx` | `number` |
| `sy` | `number` |
| `cx` | `number` |
| `cy` | `number` |
| `values` | `number`[] |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[applyLine](DChartSeriesLineOfAny.md#applyline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L291)

___

### bind

▸ **bind**(`container`, `index`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[bind](DChartSeriesLineOfAny.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L88)

___

### calcHitPoint

▸ **calcHitPoint**(`x`, `y`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) |

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcHitPoint](DChartSeriesLineOfAny.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L362)

___

### calcHitPointHitTester

▸ **calcHitPointHitTester**(`this`, `x`, `y`, `ax`, `ay`, `ox`, `oy`, `px`, `py`, `sw`, `ss`, `sa`, `index`, `threshold`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `px` | `number` |
| `py` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |
| `index` | `number` |
| `threshold` | `number` |
| `result` | [`DChartSeriesHitResult`](DChartSeriesHitResult.md) |

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcHitPointHitTester](DChartSeriesLineOfAny.md#calchitpointhittester)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:406](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L406)

___

### calcHitPointTestRange

▸ **calcHitPointTestRange**(`this`, `x`, `y`, `ax`, `ay`, `ox`, `oy`, `threshold`, `values`, `result`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `threshold` | `number` |
| `values` | `number`[] |
| `result` | [`number`, `number`] |

#### Returns

[`number`, `number`]

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcHitPointTestRange](DChartSeriesLineOfAny.md#calchitpointtestrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L381)

___

### calcRegion

▸ `Protected` **calcRegion**(`points`, `domain`, `range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | (``null`` \| `number`)[] |
| `domain` | [`DChartRegion`](../interfaces/DChartRegion.md) |
| `range` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[calcRegion](DChartSeriesLineOfAny.md#calcregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L319)

___

### destroy

▸ **destroy**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[destroy](DChartSeriesLineOfAny.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L336)

___

### doUpdate

▸ `Protected` **doUpdate**(`render`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[doUpdate](DChartSeriesLineOfAny.md#doupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L171)

___

### doUpdateLine

▸ `Protected` **doUpdateLine**(`line`, `xcoordinate`, `ycoordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `xcoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |
| `ycoordinate` | [`DChartCoordinate`](../interfaces/DChartCoordinate.md)<`CHART`\> |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[doUpdateLine](DChartSeriesLineOfAny.md#doupdateline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L198)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[emit](DChartSeriesLineOfAny.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[eventNames](DChartSeriesLineOfAny.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getOffsetDefault

▸ `Protected` **getOffsetDefault**(): `number`

#### Returns

`number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[getOffsetDefault](DChartSeriesLineOfAny.md#getoffsetdefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L84)

___

### getSizeDefault

▸ `Protected` **getSizeDefault**(): `number`

#### Returns

`number`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[getSizeDefault](DChartSeriesLineOfAny.md#getsizedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L80)

___

### hide

▸ **hide**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[hide](DChartSeriesLineOfAny.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L143)

___

### hitTest

▸ **hitTest**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[hitTest](DChartSeriesLineOfAny.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L351)

___

### initLine

▸ `Protected` **initLine**(`line`, `options`, `container`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md) |
| `options` | `undefined` \| [`DChartSeriesLineOfAnyOptions`](../interfaces/DChartSeriesLineOfAnyOptions.md) |
| `container` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\> |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[initLine](DChartSeriesLineOfAny.md#initline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L102)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[isHidden](DChartSeriesLineOfAny.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L158)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[isShown](DChartSeriesLineOfAny.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L139)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[listenerCount](DChartSeriesLineOfAny.md#listenercount)

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

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[listeners](DChartSeriesLineOfAny.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newLineOfAny

▸ `Protected` **newLineOfAny**(): [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Returns

[`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

#### Overrides

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[newLineOfAny](DChartSeriesLineOfAny.md#newlineofany)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-rectangles.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-rectangles.ts#L18)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[off](DChartSeriesLineOfAny.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[on](DChartSeriesLineOfAny.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onHide

▸ `Protected` **onHide**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onHide](DChartSeriesLineOfAny.md#onhide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L151)

___

### onRender

▸ **onRender**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onRender](DChartSeriesLineOfAny.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L166)

___

### onShow

▸ `Protected` **onShow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onShow](DChartSeriesLineOfAny.md#onshow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L132)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[onStateChange](DChartSeriesLineOfAny.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L178)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[once](DChartSeriesLineOfAny.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[removeAllListeners](DChartSeriesLineOfAny.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

`this`.

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[removeListener](DChartSeriesLineOfAny.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### show

▸ **show**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[show](DChartSeriesLineOfAny.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-base.ts#L124)

___

### toDirty

▸ **toDirty**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[toDirty](DChartSeriesLineOfAny.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L156)

___

### unbind

▸ **unbind**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[unbind](DChartSeriesLineOfAny.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L134)

___

### update

▸ **update**(): [`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Returns

[`DChartSeriesLineOfRectangles`](DChartSeriesLineOfRectangles.md)<`CHART`\>

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[update](DChartSeriesLineOfAny.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L161)

___

### updateRegion

▸ `Protected` **updateRegion**(): `void`

#### Returns

`void`

#### Inherited from

[DChartSeriesLineOfAny](DChartSeriesLineOfAny.md).[updateRegion](DChartSeriesLineOfAny.md#updateregion)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-series-line-of-any.ts#L306)
