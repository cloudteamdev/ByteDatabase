# ByteDatabase - database for beginners. 
<div align="center">
  <p>
    <a href="https://join.cloudteam.me"><img src="https://img.shields.io/discord/934070836619518082?color=%237289da&label=DIscord&style=for-the-badge" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/byte.db"><img src="https://img.shields.io/npm/v/byte.db.svg?style=for-the-badge&logo=appveyor&maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/byte.db"><img src="https://img.shields.io/npm/dt/byte.db.svg?style=for-the-badge&logo=appveyor&maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.buymeacoffee.com/cloudteam"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshields-io-buymeacoffee.vercel.app%2Fapi%3Fusername%3Dcloudteam%26type%3Dpatrons&style=for-the-badge&logo=appveyor" alt="Patreon" /></a>
  </p>
</div>

<div align="center">
  <p><img src="https://cdn.discordapp.com/attachments/979835741930655854/979845371163451412/bytedb_banner.png" alt="Enmap Logo" />
</div>

## Table of Content
- [Features](#features)
- [Installation](#installation)
- [Changelog](#changelog)
- [Quick Examples](#quick-examples)
- [Credits](#credits)

## Features
- <b>Persistent Storage</b>: Data stored won't disappear through restarts.
- <b>Support for non-javascript/typescript projects</b>: With our API (on development) you can use the database on any project you want.
- <b>Built for Beginners</b>: Our database is beginner friendly and our docs are straight-foward.

## Installation
Using NPM: 
```
npm i byte.db
```
_If you're having issues with installing, please read our troubleshooting guide [here](https://github.com/cloudteamdev/ByteDatabase/docs/troubleshooting.md)_

## Changelog
nothing yet

## Quick Examples
in ES6:
```ts
import { ByteDatabase } from "byte.db"
```
in CommonJS:
```js
const { ByteDatabase } = require("byte.db")
```
initialise the database by doing: 
```ts
const bytedb = new ByteDatabase()
// use default path and properties (learn more: https://github.com/cloudteamdev/ByteDatabase/docs/guide.md#properties)
```
snippets:<br>
   ┕ insert: 
   ```ts
   bytedb.insert("hello_world", "helloworld") // { changes: 1, lastInsertRowid: 1 }
   ``` 
   ┕ find:
   ```ts
   bytedb.find("hello_world") // helloworld
   ```
_for more detailed examples check out our guide [here](https://github.com/cloudteamdev/ByteDatabase/docs/guide.md#methods)_

## Credits
This database is an official project by the [CloudTeam](https://cloudteam.me) and is managed by [avonryle#2022](htts://github.com/avonryle) in discord.
... other people will be posted later
