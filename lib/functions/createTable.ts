import { ByteDatabase } from "../core/ByteDatabase";
import { sanitize } from "./sanitize";

export function createTable(name: string, db: ByteDatabase){
    const q = sanitize(`CREATE TABLE IF NOT EXISTS ${name} (ID TEXT, Json TEXT)`);
    return db._raw.prepare(q).run()
}
