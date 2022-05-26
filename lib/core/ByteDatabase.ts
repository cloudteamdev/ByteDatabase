//core 
import { ByteError } from "./ByteError";
import Database from 'better-sqlite3';
import { set, get } from 'lodash';
import { TypedEmitter as Emitter } from "tiny-typed-emitter";
import chalk from 'chalk'
// typings
import { DefaultByteProperties } from '../typings/types/DBP';
import { Events } from "../typings/interfaces/Events";
// structures
import { RowManager } from "../structures/RowManager";
import { DEFAULT_TABLE } from "../../constants";
import { deftable } from "../../types";
// definitions
 
export class ByteDatabase extends Emitter<Events> {
    /**
     * 
     * @property raw
     * access property "raw" which contains our base database, better-sqlite3.
     * as of Wednesday, 11th may 2022, this property is now accessible by the public.
     * @examples
     * ByteDatabase.raw.prepare("SQL STRING")
     * 
     */
     public raw: Database.Database
     /**
      * @private
      * @property rows
      * row handler for the database
      */
     private rows: RowManager = new RowManager(this)
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
         this.raw = new Database(path, props)
        }

        public insert(key: string, val: string, table: string = DEFAULT_TABLE) {
            if(typeof key !== "string") throw new ByteError("INVALID_TYPE", `Expected a type of string in method "INSERT". Recieved a type of ${typeof key} instead. \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`);
            if(val === null) throw new ByteError("MISSING_ARGUMENT", `Expected 2 arguments in method "INSERT" . \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`);
            
            if(key.includes(".")){
                let splitted = key.split(".");
                let ParentKey = splitted[0];
                let got = this.find(ParentKey);
                let _ = set(got ?? {}, splitted.slice(1).join("."), val);
                
                return this.rows.insertRowByKey(ParentKey, _, table);
            } else {
                let got = this.find(key);
                let _ = set(got ?? {}, key, val);

                return this.rows.insertRowByKey(key, _, table);
            }
        }

        public find(key: string, table: string = DEFAULT_TABLE) {
            if(typeof key !== "string") throw new ByteError("INVALID_TYPE", `Expected a type of string in method "INSERT". Recieved a type of ${typeof key} instead. \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`);
            if(!key.includes(".")){
                let result = this.rows.findRowByKey(key, table);
                let _ = get(result, key);
                return _
            } else {
                let splitted = key.split(".");
                let ParentKey = splitted[0];

                const result = this.rows.findRowByKey(ParentKey, table);
                let _ = get(result, splitted.slice(1).join("."));
                return _
            }
        }

       public wipe(table: string = DEFAULT_TABLE) {
           return this.rows.deleteAllRows(table)
       }

        public connect(): void{
            console.log(`${chalk.green.bold("[ByteDatabase (Connection)]:")} Initializing default table...`)
            try {
                this.raw.prepare(`CREATE TABLE IF NOT EXISTS ${DEFAULT_TABLE} (ID TEXT, Json TEXT)`)
            .run()
            console.log(`${chalk.green.bold("[ByteDatabase (Connection)]:")} Successfully initialized default table.`)
        } catch(error) {
            console.log(`${chalk.red.bold("[ByteDatabase (Connection)]:")} Failed to create table. Initializing session was terminated.`)
            throw new ByteError("UNKNOWN_ERROR", `This is an internal error. Please report this to the cloudteam developers here: https://join.cloudteam.me`)
        }
    }
}
