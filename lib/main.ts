//core
import Database, { Database as TypeDatabase } from 'better-sqlite3';
import EventEmitter from '@tbnritzdoge/events';
import { Table } from './structures/Table';
// types
import { DefaultByteProperties } from './typings/interfaces/DBP';
import { Events } from './typings/types/Events';
// others
import { DEFAULT_TABLE } from './util/constants';
import { methods } from './methods/exportMethods';
import { findTables } from './functions/findTables';
import { Data } from './typings/types/Data';
import { sanitize } from './functions/sanitize';

export class ByteDatabase<T extends Data = Data> extends EventEmitter<Events> {
  public readonly _raw: TypeDatabase;

  constructor(
    path = ':memory:',
    public readonly options: DefaultByteProperties = {
      sanitize: true,
    },
  ) {
    super();

    this.options = options;
    this._raw = new Database(path, options);
    this._raw
      .prepare(
        `CREATE TABLE IF NOT EXISTS ${DEFAULT_TABLE} (ID TEXT, Json TEXT)`,
      )
      .run();
  }

  private trySanitize(what: string) {
    return this.options.sanitize ? sanitize(what) : what
  }

  public findTables(): any[] {
    return findTables(this);
  }

  public insert(key: string, val: T, table: string = DEFAULT_TABLE): Database.RunResult {
    return methods.insert(key, val, table, this);
  }

  public find(key: string, table: string = DEFAULT_TABLE): T {
    return methods.find(key, table, this);
  }

  public all(table: string = DEFAULT_TABLE): T[] {
    return methods.all(table, this) as T[];
  }

  public wipe(table: string = DEFAULT_TABLE) {
    return methods.wipe(table, this);
  }

  public delete(key: string, table: string = DEFAULT_TABLE) {
    return methods.delete(key, table, this);
  }
}

export { Table };
