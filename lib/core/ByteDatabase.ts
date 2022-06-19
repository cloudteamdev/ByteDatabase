import Database, { Database as TypeDatabase, RunResult } from 'better-sqlite3';
import { ByteError } from './ByteError';
import { set, get } from 'lodash';
import EventEmitter from '@tbnritzdoge/events';
import { DefaultByteProperties, Data, Events, Regexes } from '../typings';
import { DEFAULT_TABLE, LogExecutionTime } from '../util/';
import { RowManager } from '../structures';

export class ByteDatabase<
  T extends Data = Data,
  P extends boolean = boolean,
> extends EventEmitter<Events> {
  public readonly _raw: TypeDatabase;
  private readonly _rows: RowManager = new RowManager(this);

  constructor(
    path = ':memory:',
    public readonly options: DefaultByteProperties<P> = {
      sanitize: true,
      logExecutionTime: true,
      colorizeLoggedMessages: true,
    },
  ) {
    super();

    this.options = options;
    this._raw = new Database(path, options);
  }

  private trySanitize(str: string) {
    return this.options.sanitize
      ? str.replace(Regexes['Sanitize_RegExp'], '')
      : str;
  }

  public findTables(): any[] {
    const tables = this._raw
      .prepare(
        `SELECT * FROM sqlite_schema WHERE type = 'table' AND name NOT LIKE 'sqlite_%'`,
      )
      .all();
    return tables;
  }

  @LogExecutionTime()
  public insert(key: string, val: T, table: string = DEFAULT_TABLE): RunResult {
    if (typeof key !== 'string')
      throw new ByteError(
        'INVALID_TYPE',
        `Expected a type of string in method "INSERT". Recieved a type of ${typeof key} instead.\n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`,
      );
    if (!val)
      throw new ByteError(
        'MISSING_ARGUMENT',
        `Expected 2 arguments in method "INSERT" . \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`,
      );

    if (key.includes('.')) {
      let splitted = key.split('.');
      let ParentKey = splitted[0];
      let got = this.find(ParentKey) as object;

      return this._rows.insertRowByKey(ParentKey, got as Data, table);
    } else {
      let got = this.find(key) as object;
      let _ = set(got ?? {}, key, val);

      return this._rows.insertRowByKey(key, _ as Data, table);
    }
  }

  @LogExecutionTime()
  public find(key: string, table: string = DEFAULT_TABLE): T {
    if (typeof key !== 'string')
      throw new ByteError(
        'INVALID_TYPE',
        `Expected a type of string in method "FIND". Recieved a type of ${typeof key} instead. \nIf you need help, consider joining our Discord Server!: https://join.cloudteam.me`,
      );
    if (!key.includes('.')) {
      let result = this._rows.findRowByKey(key, table);
      return get(result, key);
    } else {
      let splitted = key.split('.');
      let ParentKey = splitted[0];

      const result = this._rows.findRowByKey(ParentKey, table);
      return get(result, splitted.slice(1).join('.'));
    }
  }

  @LogExecutionTime()
  public all(table: string = DEFAULT_TABLE): T[] {
    return this._rows.findAllRows(table) as T[];
  }

  @LogExecutionTime()
  public wipe(table: string = DEFAULT_TABLE): RunResult {
    return this._rows.deleteAllRows(table);
  }

  @LogExecutionTime()
  public delete(key: string, table: string = DEFAULT_TABLE): RunResult {
    return this._rows.deleteRowByKey(key, table);
  }

  public connect() {
    this._raw
      .prepare(
        `CREATE TABLE IF NOT EXISTS ${DEFAULT_TABLE} (ID TEXT, Json TEXT)`,
      )
      .run();

    this.emit('connect', 'Database Ready');
  }
}
