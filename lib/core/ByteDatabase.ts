import { ByteError } from "./ByteError";
import Database from 'better-sqlite3';
import { set, get } from 'lodash';
import EventEmitter from '@tbnritzdoge/events';
import { DefaultByteProperties } from '../typings/types/DBP';
import { RowManager } from "../structures/RowManager";
import { DEFAULT_TABLE } from "../util/constants";
import { createTable } from '../functions/createTable'
import { Events } from "../typings/interfaces/Events";

export class ByteDatabase extends EventEmitter<Events> {
    /**
     * 
     * @property raw
     * access property "raw" which contains our base database, better-sqlite3.
     * as of Wednesday, 11th may 2022, this property is now accessible by the public.
     * @examples
     * ByteDatabase.raw.prepare("SQL STRING")
     * 
     */
     public _raw: Database.Database
     /**
      * @property rows
      * row handler for the database
      */
     private _rows: RowManager = new RowManager(this)
     /**
      * 
      * @param paths
      * path of the database file, defaulting to the memory of the database.
      * @param props 
      * properties for the database. check https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md#new-databasepath-options for more information.
      * 
      */
     constructor(path: string = ":memory:", props: DefaultByteProperties | object = {}) {
         super()
         this._raw = new Database(path, props)
         this._raw.prepare(`CREATE TABLE IF NOT EXISTS ${DEFAULT_TABLE} (ID TEXT, Json TEXT)`).run()
     }

        public insert(key: string, val: any, table: string = DEFAULT_TABLE) {
            if(typeof key !== "string") throw new ByteError("INVALID_TYPE", `Expected a type of string in method "INSERT". Recieved a type of ${typeof key} instead. \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`);
            if(val === null) throw new ByteError("MISSING_ARGUMENT", `Expected 2 arguments in method "INSERT" . \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`);
            
            if(key.includes(".")){
                let splitted = key.split(".");
                let ParentKey = splitted[0];
                let got = this.find(ParentKey);
                let _ = set(got ?? {}, splitted.slice(1).join("."), val);
                
                return this._rows.insertRowByKey(ParentKey, _, table);
            } else {
                let got = this.find(key);
                let _ = set(got ?? {}, key, val);

                return this._rows.insertRowByKey(key, _, table);
            }
        }

        public find(key: string, table: string = DEFAULT_TABLE) {
            if(typeof key !== "string") throw new ByteError("INVALID_TYPE", `Expected a type of string in method "INSERT". Recieved a type of ${typeof key} instead. \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`);
            if(!key.includes(".")){
                let result = this._rows.findRowByKey(key, table);
                let _ = get(result, key);
                return _
            } else {
                let splitted = key.split(".");
                let ParentKey = splitted[0];

                const result = this._rows.findRowByKey(ParentKey, table);
                let _ = get(result, splitted.slice(1).join("."));
                return _
            }
        }

        public all(table: string = DEFAULT_TABLE){
            return this._rows.findAllRows(table)
        }

        public wipe(table: string = DEFAULT_TABLE) {
           return this._rows.deleteAllRows(table)
       }

        public delete(key: string, table: string = DEFAULT_TABLE){
            if(typeof key !== "string") throw new ByteError("INVALID_TYPE", `Expected a type of string in method "DELETE". Recieved a type of ${typeof key} instead. \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`)
            return this._rows.deleteRowByKey(key, table)
        }

        public createTable(name: string){
            return createTable(name, this)
        }
    }
