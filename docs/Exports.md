# byte.db

## Table of contents

### Classes

- [ByteDatabase](../wiki/ByteDatabase)
- [Table](../wiki/Table)

### Interfaces

- [DefaultByteOptions](../wiki/DefaultByteOptions)

### Type Aliases

- [Async](../wiki/Exports#async)
- [Data](../wiki/Exports#data)
- [Events](../wiki/Exports#events)
- [If](../wiki/Exports#if)
- [UnknownMethod](../wiki/Exports#unknownmethod)

## Type Aliases

### Async

Ƭ **Async**<`T`\>: `Promise`<`T`\> \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

src/typings/types/Async.ts:1

___

### Data

Ƭ **Data**: `string` \| { `[key: PropertyKey]`: `unknown`;  } \| `unknown`[]

#### Defined in

src/typings/types/Data.ts:1

___

### Events

Ƭ **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `insert` | [dataSet: Function] |
| `ready` | [data: Async<void\>] |

#### Defined in

src/typings/types/Events.ts:3

___

### If

Ƭ **If**<`B`, `K`, `U`\>: `B` extends ``true`` ? `K` : `K` \| `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `boolean` |
| `K` | `K` |
| `U` | `unknown` |

#### Defined in

src/typings/types/If.ts:1

___

### UnknownMethod

Ƭ **UnknownMethod**: (...`args`: `any`[]) => `unknown`

#### Type declaration

▸ (...`args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`unknown`

#### Defined in

src/typings/types/UnknownMethod.ts:1
