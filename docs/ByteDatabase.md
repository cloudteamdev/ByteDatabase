# Class: ByteDatabase<B\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `boolean` = `boolean` |

## Hierarchy

- `Emitter`<[`Events`](../wiki/Exports#events)\>

  ↳ **`ByteDatabase`**

## Table of contents

### Constructors

- [constructor](../wiki/ByteDatabase#constructor)

### Properties

- [[events]](../wiki/ByteDatabase#%5Bevents%5D)
- [\_raw](../wiki/ByteDatabase#_raw)
- [options](../wiki/ByteDatabase#options)
- [tables](../wiki/ByteDatabase#tables)

### Methods

- [addListener](../wiki/ByteDatabase#addlistener)
- [createTable](../wiki/ByteDatabase#createtable)
- [emit](../wiki/ByteDatabase#emit)
- [eventNames](../wiki/ByteDatabase#eventnames)
- [findTable](../wiki/ByteDatabase#findtable)
- [getMaxListeners](../wiki/ByteDatabase#getmaxlisteners)
- [insert](../wiki/ByteDatabase#insert)
- [listenerCount](../wiki/ByteDatabase#listenercount)
- [listeners](../wiki/ByteDatabase#listeners)
- [off](../wiki/ByteDatabase#off)
- [on](../wiki/ByteDatabase#on)
- [once](../wiki/ByteDatabase#once)
- [prependListener](../wiki/ByteDatabase#prependlistener)
- [prependOnceListener](../wiki/ByteDatabase#prependoncelistener)
- [rawListeners](../wiki/ByteDatabase#rawlisteners)
- [removeAllListeners](../wiki/ByteDatabase#removealllisteners)
- [removeListener](../wiki/ByteDatabase#removelistener)
- [setMaxListeners](../wiki/ByteDatabase#setmaxlisteners)

## Constructors

### constructor

• **new ByteDatabase**<`B`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `boolean` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DefaultByteOptions`](../wiki/DefaultByteOptions)<`B`\> |

#### Overrides

Emitter&lt;Events\&gt;.constructor

#### Defined in

src/core/ByteDatabase.ts:18

## Properties

### [events]

• **[events]**: [`Events`](../wiki/Exports#events)

#### Inherited from

Emitter.\_\_@events@216

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:3

___

### \_raw

• **\_raw**: `Database`

#### Defined in

src/core/ByteDatabase.ts:14

___

### options

• **options**: `unknown`

#### Defined in

src/core/ByteDatabase.ts:16

___

### tables

• **tables**: `Map`<`string`, [`Table`](../wiki/Table)\>

#### Defined in

src/core/ByteDatabase.ts:15

## Methods

### addListener

▸ **addListener**<`K`\>(`event`, `listener`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.addListener

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:11

___

### createTable

▸ **createTable**(`name`): `Map`<`string`, [`Table`](../wiki/Table)\>

**`since`** v2.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the table that will be registered to the database instance |

#### Returns

`Map`<`string`, [`Table`](../wiki/Table)\>

table

#### Defined in

src/core/ByteDatabase.ts:42

___

### emit

▸ **emit**<`K`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | [`Events`](../wiki/Exports#events)[`K`] |

#### Returns

`boolean`

#### Inherited from

Emitter.emit

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:9

___

### eventNames

▸ **eventNames**(): `string`[]

#### Returns

`string`[]

#### Inherited from

Emitter.eventNames

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:15

___

### findTable

▸ `Private` **findTable**(`name`): `undefined` \| [`Table`](../wiki/Table)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Table`](../wiki/Table)

#### Defined in

src/core/ByteDatabase.ts:71

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

Emitter.getMaxListeners

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:14

___

### insert

▸ **insert**(`key`, `data`): `undefined` \| `void`

**`since`** v1.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key that the data is to be inserted to |
| `data` | `any` | data that is to be inserted into the key given |

#### Returns

`undefined` \| `void`

#### Defined in

src/core/ByteDatabase.ts:65

___

### listenerCount

▸ **listenerCount**<`K`\>(`event`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |

#### Returns

`number`

#### Inherited from

Emitter.listenerCount

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:8

___

### listeners

▸ **listeners**<`K`\>(`event`): `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |

#### Returns

`EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\>[]

#### Inherited from

Emitter.listeners

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:17

___

### off

▸ **off**<`K`\>(`event`, `fn`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `fn` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.off

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:7

___

### on

▸ **on**<`K`\>(`event`, `listener`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.on

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:5

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.once

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:6

___

### prependListener

▸ **prependListener**<`K`\>(`event`, `listener`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.prependListener

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:18

___

### prependOnceListener

▸ **prependOnceListener**<`K`\>(`event`, `listener`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.prependOnceListener

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:19

___

### rawListeners

▸ **rawListeners**<`K`\>(`event`): `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |

#### Returns

`EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\>[]

#### Inherited from

Emitter.rawListeners

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:16

___

### removeAllListeners

▸ **removeAllListeners**<`K`\>(`event?`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `K` |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.removeAllListeners

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:13

___

### removeListener

▸ **removeListener**<`K`\>(`event`, `fn`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Events`](../wiki/Exports#events) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `fn` | `EventFunction`<[`Events`](../wiki/Exports#events)[`K`]\> |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.removeListener

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:10

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ByteDatabase`](../wiki/ByteDatabase)<`B`\>

#### Inherited from

Emitter.setMaxListeners

#### Defined in

node_modules/@tbnritzdoge/events/dist/index.d.ts:12
