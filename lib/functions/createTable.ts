import { ByteDatabase } from "../core/ByteDatabase";
import { ByteError } from "../core/ByteError";

export function createTable(name: string, db: ByteDatabase){
    const regex = /[A-z0-9]+/
    if(name.match(regex)?.[0] === name){
    const q = `CREATE TABLE IF NOT EXISTS ${name} (ID TEXT, Json TEXT)`;
    return db._raw.prepare(q).run()
    } else {
        throw new ByteError("INVALID_TABLE_NAME", `${name} does not follow the regex ${regex}`)
    }
}
