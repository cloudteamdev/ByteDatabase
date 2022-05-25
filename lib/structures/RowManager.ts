import { ByteDatabase } from "../core/ByteDatabase";
import { sanitize } from "../functions/sanitize";
var deftable = "DEFAULT_BYTE_TABLE"

export class RowManager {
    database: any
    constructor(db: ByteDatabase){
        this.database = db
    }

    insertRowByKey(
        key: string, 
        value: any, 
        table: any = deftable
        ){
            const strjson = JSON.stringify(value);
            const q = sanitize(`INSERT INTO ${table} (ID,Json) VALUES (?,?)`);
            return this.database.raw.prepare(q).run(key, strjson)
        }

        updateRowByKey(
        key: string, 
        value: any, 
        table: any = deftable
        ){
            const strjson = JSON.stringify(value);

            return this.database.raw
            .prepare(`UPDATE ${table} SET Json = (?) WHERE ID = (?)`)
            .run(key, strjson)
            .changes
        }

        findRowByKey(
            key: string,
            table: any = deftable
        ){
            let q = sanitize(`SELECT Json FROM ${table} WHERE ID = @key`)
            let val = this.database.raw.prepare(q).get({ key })
            return val != null ? JSON.parse(val.Json) : null;
        }

     deleteAllRows(
         table: any = deftable
         ){
            return this.database.raw.prepare(`DELETE FROM ${table}`).run().changes;
        }
    
    }
