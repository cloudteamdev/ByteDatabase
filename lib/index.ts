//core
import Database, { Database as TypeDatabase } from 'better-sqlite3';
import EventEmitter from '@tbnritzdoge/events';
// types
import { DefaultByteProperties } from './typings/interfaces/DBP';
import { Events } from './typings/types/Events';
// others
import { DEFAULT_TABLE } from './util/constants';
import { methods } from './methods/exportMethods';

export class ByteDatabase extends EventEmitter<Events> {
  public _raw: TypeDatabase;
  public options: DefaultByteProperties;

  constructor(
    path: string,
    options: DefaultByteProperties = {
      sanitize: true,
      path: ':memory:',
    },
  ) {
    super();

    options.path = path;

    this.options = options;
    this._raw = new Database(path, options);

    this._raw
      .prepare(
        `CREATE TABLE IF NOT EXISTS ${DEFAULT_TABLE} (ID TEXT, Json TEXT)`,
      )
      .run();
  }

  public insert(key: string, val: any, table: string = DEFAULT_TABLE) {
    return methods.insert(key, val, table, this);
  }

  public find(key: string, table: string = DEFAULT_TABLE) {
    return methods.find(key, table, this);
  }

  public all(table: string = DEFAULT_TABLE) {
    return methods.all(table, this);
  }

  public wipe(table: string = DEFAULT_TABLE) {
    return methods.wipe(table, this);
  }

  public delete(key: string, table: string = DEFAULT_TABLE) {
    return methods.delete(key, table, this);
  }
}
