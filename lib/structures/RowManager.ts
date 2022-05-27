mport { ByteDatabase } from "../core/ByteDatabase";

export class RowManager {
    _database: ByteDatabase
    constructor(db: ByteDatabase){
        this._database = db
    }

    insertRowByKey(key: string, value: Record<string, unknown> | string | unknown[], table: string){
        const val = value !== "string" ? JSON.stringify(value) : value;
        return this._database._raw.prepare(`INSERT INTO ${table} (ID,Json) VALUES (?,?)`).run(key, val)
    }
    
    updateRowByKey(key: string, value: Record<string, unknown> | string | unknown[], table: string ){
        const val = value !== "string" ? JSON.stringify(value) : value;
        return this._database._raw.prepare(`UPDATE ${table} SET Json = (?) WHERE ID = (?)`).run(key, val)
    }

    findRowByKey(key: string, table: string){
        const val = this._database._raw.prepare(`SELECT Json FROM ${table} WHERE ID = @key`).get({ key })
        return val !== null ? JSON.parse(val.Json) : null;
    }

    findAllRows(table: string){
        const val = this._database._raw.prepare(`SELECT * FROM ${table}`).iterate();
        const DataArr: object[] = [];
        for(const i of val){
            DataArr.push({
                    ID: i.ID,
                    JSON: i.Json,
                    TABLE: table
                })
        }

        return DataArr
    }

    deleteAllRows(table: string){
        return this._database._raw.prepare(`DELETE FROM ${table}`).run().changes
    }

    deleteRowByKey(key: string, table: string){
        return this._database._raw.prepare(`DELETE FROM ${table} WHERE ID = @key`).run({ key }).changes;
    }
}
