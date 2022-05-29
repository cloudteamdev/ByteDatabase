var chalk = require('chalk')

export class ByteError extends Error {
    constructor(name: string, message: string) {
        super(message)
        this.name = `${chalk.red.bold('[ByteDatabase (Error)]')} ${chalk.bold.magenta("=>")} ${chalk.bold.yellow(name)}`
    }
}
