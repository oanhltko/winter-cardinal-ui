[Winter Cardinal UI - v0.374.0](../index.md) / DThemeTableHeader

# Interface: DThemeTableHeader

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemeTableRow`](DThemeTableRow.md)

  ↳ **`DThemeTableHeader`**

## Implemented by

- [`DThemeDarkTableHeader`](../classes/DThemeDarkTableHeader.md)
- [`DThemeWhiteTableHeader`](../classes/DThemeWhiteTableHeader.md)

## Table of contents

### Methods

- [getAlpha](DThemeTableHeader.md#getalpha)
- [getBackgroundAlpha](DThemeTableHeader.md#getbackgroundalpha)
- [getBackgroundColor](DThemeTableHeader.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeTableHeader.md#getbackgroundtexture)
- [getBorderAlign](DThemeTableHeader.md#getborderalign)
- [getBorderAlpha](DThemeTableHeader.md#getborderalpha)
- [getBorderColor](DThemeTableHeader.md#getbordercolor)
- [getBorderMask](DThemeTableHeader.md#getbordermask)
- [getBorderTexture](DThemeTableHeader.md#getbordertexture)
- [getBorderWidth](DThemeTableHeader.md#getborderwidth)
- [getClearType](DThemeTableHeader.md#getcleartype)
- [getColor](DThemeTableHeader.md#getcolor)
- [getCornerAdjust](DThemeTableHeader.md#getcorneradjust)
- [getCornerMask](DThemeTableHeader.md#getcornermask)
- [getCornerRadius](DThemeTableHeader.md#getcornerradius)
- [getCursor](DThemeTableHeader.md#getcursor)
- [getDirection](DThemeTableHeader.md#getdirection)
- [getFontFamilly](DThemeTableHeader.md#getfontfamilly)
- [getFontSize](DThemeTableHeader.md#getfontsize)
- [getFontStyle](DThemeTableHeader.md#getfontstyle)
- [getFontVariant](DThemeTableHeader.md#getfontvariant)
- [getFontWeight](DThemeTableHeader.md#getfontweight)
- [getHeight](DThemeTableHeader.md#getheight)
- [getInteractive](DThemeTableHeader.md#getinteractive)
- [getLineHeight](DThemeTableHeader.md#getlineheight)
- [getMargin](DThemeTableHeader.md#getmargin)
- [getMultiplicity](DThemeTableHeader.md#getmultiplicity)
- [getOutlineAlign](DThemeTableHeader.md#getoutlinealign)
- [getOutlineAlpha](DThemeTableHeader.md#getoutlinealpha)
- [getOutlineColor](DThemeTableHeader.md#getoutlinecolor)
- [getOutlineMask](DThemeTableHeader.md#getoutlinemask)
- [getOutlineOffset](DThemeTableHeader.md#getoutlineoffset)
- [getOutlineWidth](DThemeTableHeader.md#getoutlinewidth)
- [getPaddingBottom](DThemeTableHeader.md#getpaddingbottom)
- [getPaddingLeft](DThemeTableHeader.md#getpaddingleft)
- [getPaddingRight](DThemeTableHeader.md#getpaddingright)
- [getPaddingTop](DThemeTableHeader.md#getpaddingtop)
- [getReverse](DThemeTableHeader.md#getreverse)
- [getShadow](DThemeTableHeader.md#getshadow)
- [getTitle](DThemeTableHeader.md#gettitle)
- [getWeight](DThemeTableHeader.md#getweight)
- [getWidth](DThemeTableHeader.md#getwidth)
- [getX](DThemeTableHeader.md#getx)
- [getY](DThemeTableHeader.md#gety)
- [newShadow](DThemeTableHeader.md#newshadow)
- [newShadowWeak](DThemeTableHeader.md#newshadowweak)
- [newState](DThemeTableHeader.md#newstate)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getAlpha](DThemeTableRow.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBackgroundAlpha](DThemeTableRow.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L552)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBackgroundColor](DThemeTableRow.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L545)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBackgroundTexture](DThemeTableRow.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L557)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBorderAlign](DThemeTableRow.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L586)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBorderAlpha](DThemeTableRow.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L572)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBorderColor](DThemeTableRow.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L565)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBorderMask](DThemeTableRow.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBorderTexture](DThemeTableRow.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L598)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getBorderWidth](DThemeTableRow.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getClearType](DThemeTableRow.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L698)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getColor](DThemeTableRow.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerAdjust

▸ **getCornerAdjust**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getCornerAdjust](DThemeTableRow.md#getcorneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L42)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getCornerMask](DThemeTableRow.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getCornerRadius](DThemeTableRow.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L623)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getCursor](DThemeTableRow.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L720)

___

### getDirection

▸ **getDirection**(): [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Returns

[`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getDirection](DThemeTableRow.md#getdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L41)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getFontFamilly](DThemeTableRow.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getFontSize](DThemeTableRow.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getFontStyle](DThemeTableRow.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getFontVariant](DThemeTableRow.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getFontWeight](DThemeTableRow.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getHeight](DThemeTableRow.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L532)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getInteractive](DThemeTableRow.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L682)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getLineHeight](DThemeTableRow.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getMargin](DThemeTableRow.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L40)

___

### getMultiplicity

▸ **getMultiplicity**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getMultiplicity](DThemeTableRow.md#getmultiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L43)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getOutlineAlign](DThemeTableRow.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L664)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getOutlineAlpha](DThemeTableRow.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getOutlineColor](DThemeTableRow.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L636)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getOutlineMask](DThemeTableRow.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getOutlineOffset](DThemeTableRow.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getOutlineWidth](DThemeTableRow.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L650)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getPaddingBottom](DThemeTableRow.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L618)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getPaddingLeft](DThemeTableRow.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:603](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L603)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getPaddingRight](DThemeTableRow.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getPaddingTop](DThemeTableRow.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:613](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L613)

___

### getReverse

▸ **getReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getReverse](DThemeTableRow.md#getreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L44)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getShadow](DThemeTableRow.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L677)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getTitle](DThemeTableRow.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L692)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getWeight](DThemeTableRow.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L705)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getWidth](DThemeTableRow.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getX](DThemeTableRow.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[getY](DThemeTableRow.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L527)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[newShadow](DThemeTableRow.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L710)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[newShadowWeak](DThemeTableRow.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L715)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeTableRow](DThemeTableRow.md).[newState](DThemeTableRow.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L687)
