---
id: "ColumnTransformer"
title: "Class: ColumnTransformer"
sidebar_label: "ColumnTransformer"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ColumnTransformer**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ColumnTransformerParams` |

#### Defined in

[compose/column.transformer.ts:25](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L25)

## Properties

### remainder

• **remainder**: `TransformerOrString`

#### Defined in

[compose/column.transformer.ts:23](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L23)

___

### transformers

• **transformers**: `TransformerTriple`

#### Defined in

[compose/column.transformer.ts:22](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L22)

## Methods

### fit

▸ **fit**(`X`, `y?`): [`ColumnTransformer`](ColumnTransformer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `Scikit2D` |
| `y?` | `Scikit1D` |

#### Returns

[`ColumnTransformer`](ColumnTransformer)

#### Defined in

[compose/column.transformer.ts:46](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L46)

___

### fitTransform

▸ **fitTransform**(`X`, `y?`): `Tensor2D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `Scikit2D` |
| `y?` | `Scikit1D` |

#### Returns

`Tensor2D`

#### Defined in

[compose/column.transformer.ts:72](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L72)

___

### getColumns

▸ **getColumns**(`X`, `selectedColumns`): `Tensor2D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `DataFrame` |
| `selectedColumns` | `Selection` |

#### Returns

`Tensor2D`

#### Defined in

[compose/column.transformer.ts:33](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L33)

___

### transform

▸ **transform**(`X`, `y?`): `Tensor2D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `X` | `Scikit2D` |
| `y?` | `Scikit1D` |

#### Returns

`Tensor2D`

#### Defined in

[compose/column.transformer.ts:58](https://github.com/dcrescim/scikit.js/blob/ecc4160/src/compose/column.transformer.ts#L58)