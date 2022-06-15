# <p align="center"> ByteDatabase: Built for Beginners </p>
<div align="center">
  <p><img src="https://cdn.discordapp.com/attachments/979835741930655854/979845371163451412/bytedb_banner.png" alt="ByteDB Logo Wide" /></p>
  <p>
    <a href="https://join.cloudteam.me"><img src="https://img.shields.io/discord/934070836619518082?color=%237289da&label=DIscord&style=for-the-badge" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/byte.db"><img src="https://img.shields.io/npm/v/byte.db.svg?style=for-the-badge&logo=appveyor&maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/byte.db"><img src="https://img.shields.io/npm/dt/byte.db.svg?style=for-the-badge&logo=appveyor&maxAge=3600" alt="NPM downloads" /></a>
    <a href="#contributors"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=for-the-badge&logo=appveyor" alt="Contributor Count"/></a><br>
    <a href=https://ko-fi.com/H2H1D9P6R><img src="https://ko-fi.com/img/githubbutton_sm.svg"/></a>
  </p>
</div>

## Table of Content 
- [Installation](#installation)
- [Getting started with DiscordJS](#getting-started-with-discordjs)
- [Changelog](#changelog-curr-v110-next-v2-rewrite)
- [Roadmap](#roadmap)
- [Contributors](#contributors-)

## Installation
Install with NPM:
```sh
npm install byte.db
```
<b>Troubleshooting</b>: soon <br>
<b>Install for deno</b>: soon

## Getting started with [DiscordJS](https://github.com/discordjs/discord.js)
```ts
import { Client, Intents } from "discord.js";
import { ByteDatabase } from "byte.db";

const client = new Client({
    intents: Intents.FLAGS.Guilds | Intents.Flags.GuildMessages,
});

const database = new ByteDatabase("byte.db", {
    sanitize: true,
    timeout: 10000
});

client.login("token")
```

## ChangeLog (curr: v1.1.0, next: v2 rewrite)
nothing here yet

## Roadmap

-   [ ] Class `ByteDatabase`
    -   [ ] Methods
        -   [x] insert
        -   [ ] update
        -   [x] find
        -   [x] all
        -   [x] wipe
        -   [x] delete
        -   [ ] push
        -   [ ] pull
    -   [ ] Burst Methods
        -   [ ] burstInset
        -   [ ] burstFind
        -   [ ] burstDelete
        -   [ ] burstPush
        -   [ ] burstPull
       
-    [ ] Class `Table`
     -  [ ] rewrite
-    [ ] Class `RowManager`
     -   [x] insertRowByKey
     -   [x] updateRowByKey
     -   [x] findRowByKey
     -   [x] findAllRows
     -   [x] deleteAllRows
     -   [x] deleteRowByKey
     -   [ ] pushElementToKey
     -   [ ] pullElementFromKey
     
## Contributors ✨
This database is an official project under the organisation [CloudTeam](https://cloudteam.me) and is managed by [avonryle#2022](https://github.com/avonryle) at discord.

Thanks goes to these wonderful people who contributed to this project:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/oriel-beck"><img src="https://avatars.githubusercontent.com/u/72157108?v=4?s=100" width="100px;" alt=""/><br /><sub><b>oriel-beck</b></sub></a><br /><a href="https://github.com/cloudteamdev/ByteDatabase/commits?author=oriel-beck" title="Code">💻</a> <a href="https://github.com/cloudteamdev/ByteDatabase/issues?q=author%3Aoriel-beck" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Rubenennj"><img src="https://avatars.githubusercontent.com/u/57841770?v=4?s=100" width="100px;" alt=""/><br /><sub><b>YuzuTheNeko</b></sub></a><br /><a href="https://github.com/cloudteamdev/ByteDatabase/commits?author=Rubenennj" title="Code">💻</a> <a href="https://github.com/cloudteamdev/ByteDatabase/issues?q=author%3ARubenennj" title="Bug reports">🐛</a> <a href="#ideas-Rubenennj" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
