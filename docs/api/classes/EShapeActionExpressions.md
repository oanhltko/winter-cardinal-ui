[Winter Cardinal UI - v0.310.1](../index.md) / EShapeActionExpressions

# Class: EShapeActionExpressions

[EShape](../interfaces/EShape.md) action expression utility class.

## Table of contents

### Constructors

- [constructor](EShapeActionExpressions.md#constructor)

### Methods

- [EMPTY](EShapeActionExpressions.md#empty)
- [FALSE](EShapeActionExpressions.md#false)
- [NULL](EShapeActionExpressions.md#null)
- [ONE](EShapeActionExpressions.md#one)
- [ONE\_HUNDRED](EShapeActionExpressions.md#one_hundred)
- [TRUE](EShapeActionExpressions.md#true)
- [ZERO](EShapeActionExpressions.md#zero)
- [from](EShapeActionExpressions.md#from)
- [ofBoolean](EShapeActionExpressions.md#ofboolean)
- [ofBooleanOrFalse](EShapeActionExpressions.md#ofbooleanorfalse)
- [ofBooleanOrTrue](EShapeActionExpressions.md#ofbooleanortrue)
- [ofElementOrNull](EShapeActionExpressions.md#ofelementornull)
- [ofNumber](EShapeActionExpressions.md#ofnumber)
- [ofNumberOrNull](EShapeActionExpressions.md#ofnumberornull)
- [ofNumberOrOne](EShapeActionExpressions.md#ofnumberorone)
- [ofNumberOrOneHundred](EShapeActionExpressions.md#ofnumberoronehundred)
- [ofString](EShapeActionExpressions.md#ofstring)
- [ofStringOrNull](EShapeActionExpressions.md#ofstringornull)
- [ofUnknown](EShapeActionExpressions.md#ofunknown)

## Constructors

### constructor

• **new EShapeActionExpressions**()

## Methods

### EMPTY

▸ `Static` **EMPTY**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L17)

___

### FALSE

▸ `Static` **FALSE**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L19)

___

### NULL

▸ `Static` **NULL**(): ``null``

#### Returns

``null``

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L13)

___

### ONE

▸ `Static` **ONE**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L15)

___

### ONE\_HUNDRED

▸ `Static` **ONE_HUNDRED**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L16)

___

### TRUE

▸ `Static` **TRUE**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L18)

___

### ZERO

▸ `Static` **ZERO**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L14)

___

### from

▸ `Static` **from**<`T`, `DEF`\>(`expression`, `caster`, `def`, `defLiteral`, `nullable`): `DEF` \| [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `DEF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `caster` | `string` |
| `def` | `DEF` |
| `defLiteral` | `string` |
| `nullable` | `boolean` |

#### Returns

`DEF` \| [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`T`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L21)

▸ `Static` **from**<`T`, `P`, `DEF`\>(`expression`, `caster`, `def`, `defLiteral`, `nullable`, `parameter`): `DEF` \| [`EShapeActionExpressionWithParameter`](../index.md#eshapeactionexpressionwithparameter)<`T`, `P`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |
| `DEF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `caster` | `string` |
| `def` | `DEF` |
| `defLiteral` | `string` |
| `nullable` | `boolean` |
| `parameter` | `string` |

#### Returns

`DEF` \| [`EShapeActionExpressionWithParameter`](../index.md#eshapeactionexpressionwithparameter)<`T`, `P`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L28)

___

### ofBoolean

▸ `Static` **ofBoolean**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L115)

___

### ofBooleanOrFalse

▸ `Static` **ofBooleanOrFalse**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L123)

___

### ofBooleanOrTrue

▸ `Static` **ofBooleanOrTrue**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L119)

___

### ofElementOrNull

▸ `Static` **ofElementOrNull**<`ELEMENT`\>(`expression`): `undefined` \| [`EShapeActionExpressionWithParameter`](../index.md#eshapeactionexpressionwithparameter)<``null`` \| `ELEMENT`, `HTMLElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`undefined` \| [`EShapeActionExpressionWithParameter`](../index.md#eshapeactionexpressionwithparameter)<``null`` \| `ELEMENT`, `HTMLElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L127)

___

### ofNumber

▸ `Static` **ofNumber**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L99)

___

### ofNumberOrNull

▸ `Static` **ofNumberOrNull**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L87)

___

### ofNumberOrOne

▸ `Static` **ofNumberOrOne**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L103)

___

### ofNumberOrOneHundred

▸ `Static` **ofNumberOrOneHundred**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L107)

___

### ofString

▸ `Static` **ofString**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L111)

___

### ofStringOrNull

▸ `Static` **ofStringOrNull**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L91)

___

### ofUnknown

▸ `Static` **ofUnknown**(`expression`): [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`EShapeActionExpression`](../index.md#eshapeactionexpression)<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-expressions.ts#L95)
