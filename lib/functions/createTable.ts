import { ByteDatabase } from "../core/ByteDatabase";
import { ByteError } from "../core/ByteError";
import { CREATE_TABLE_REGEX } from "../util/constants";

export function createTable(name: string, db: ByteDatabase) {
    if (CREATE_TABLE_REGEX.test(name)) {
        return db._raw.prepare(`CREATE TABLE IF NOT EXISTS ${name} (ID TEXT, Json TEXT)`).run()
    } else {
        throw new ByteError("INVALID_TABLE_NAME", `${name} does not follow the regex ${CREATE_TABLE_REGEX}`)
    }
}
