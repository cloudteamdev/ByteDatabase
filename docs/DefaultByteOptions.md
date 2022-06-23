# Interface: DefaultByteOptions<B\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `boolean` = `boolean` |

## Hierarchy

- `Options`

  ↳ **`DefaultByteOptions`**

## Table of contents

### Properties

- [colorizeLoggedMessages](../wiki/DefaultByteOptions#colorizeloggedmessages)
- [file](../wiki/DefaultByteOptions#file)
- [fileMustExist](../wiki/DefaultByteOptions#filemustexist)
- [nativeBinding](../wiki/DefaultByteOptions#nativebinding)
- [readonly](../wiki/DefaultByteOptions#readonly)
- [sanitize](../wiki/DefaultByteOptions#sanitize)
- [timeout](../wiki/DefaultByteOptions#timeout)
- [verbose](../wiki/DefaultByteOptions#verbose)

## Properties

### colorizeLoggedMessages

• `Optional` **colorizeLoggedMessages**: [`If`](../wiki/Exports#if)<`B`, `boolean`, ``null``\>

#### Defined in

src/typings/interfaces/DefaultByteOptions.ts:8

___

### file

• **file**: `string`

#### Defined in

src/typings/interfaces/DefaultByteOptions.ts:6

___

### fileMustExist

• `Optional` **fileMustExist**: `boolean`

#### Inherited from

Options.fileMustExist

#### Defined in

node_modules/@types/better-sqlite3/index.d.ts:110

___

### nativeBinding

• `Optional` **nativeBinding**: `string`

#### Inherited from

Options.nativeBinding

#### Defined in

node_modules/@types/better-sqlite3/index.d.ts:113

___

### readonly

• `Optional` **readonly**: `boolean`

#### Inherited from

Options.readonly

#### Defined in

node_modules/@types/better-sqlite3/index.d.ts:109

___

### sanitize

• **sanitize**: [`If`](../wiki/Exports#if)<`B`, `boolean`, ``null``\>

#### Defined in

src/typings/interfaces/DefaultByteOptions.ts:7

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Options.timeout

#### Defined in

node_modules/@types/better-sqlite3/index.d.ts:111

___

### verbose

• `Optional` **verbose**: (`message?`: `any`, ...`additionalArgs`: `any`[]) => `void`

#### Type declaration

▸ (`message?`, ...`additionalArgs`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...additionalArgs` | `any`[] |

##### Returns

`void`

#### Inherited from

Options.verbose

#### Defined in

node_modules/@types/better-sqlite3/index.d.ts:112
