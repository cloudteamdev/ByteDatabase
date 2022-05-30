# Troubleshooting Installation
regular way to install: [`npm i byte.db`](https://npmjs.com/byte.db)

## Install the latest NodeJS version
1. Make sure you're using a NodeJS version of v15.x or later.
2. If you're on Windows, while installing, be sure to select "Automatically install the necessary tools" on the "Tools for Native Modules" page, and follow the remaining steps, including opening an admin PowerShell and installing visual studio and python. Everything should just work.

## Install the [`node-gyp`](https://github.com/nodejs/node-gyp#installation) toolchain
1. Make sure you have [`node-gyp`](https://github.com/nodejs/node-gyp#installation) globally installed
1. Make sure all [`node-gyp` dependencies are installed](https://github.com/nodejs/node-gyp#on-unix). On Windows you may need to [configure some things manually](https://github.com/nodejs/node-gyp#on-windows). Use `npm ls node-gyp` to make sure none of your local packages installed an outdated version of `node-gyp` that is used over the global one.

## No special characters
Make sure there are no spaces in your project path: `node-gyp` may not escape spaces or special characters (like `%` or `$`) properly.

## Windows
1. Install NodeJS v15.x or later
2. Install the latest python build (v3.x is fine).

### if this didn't work
1. delete `node_module` and `$HOME/.node-gyp` 
2. run `npm install`

## If none of the above work...
Join the official CloudTeam Discord server [here](https://join.cloudteam.me) or create an [issue](https://github.com/cloudteamdev/ByteDatabase/issues)
#### [source for the troubleshooting](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md)
