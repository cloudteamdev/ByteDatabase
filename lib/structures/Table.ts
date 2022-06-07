import { ByteDatabase } from '../index';
import { CREATE_TABLE_REGEX } from '../util/constants';
import { ByteError } from './ByteError';

export class Table {
  private _database: ByteDatabase;
  private _tableName: string;

  constructor(name: string, db: ByteDatabase) {
    this._database = db;
    this._tableName = name;
  }

  init() {
    return CREATE_TABLE_REGEX.test(this._tableName)
      ? this._database._raw
          .prepare(
            `CREATE TABLE IF NOT EXISTS ${this._tableName} (ID TEXT, Json TEXT)`,
          )
          .run()
      : new ByteError(
          'INVALID_TABLE_NAME',
          `Table name ${this._tableName} does not follow the regex ${CREATE_TABLE_REGEX}. Table names accepts only alphanumerical values.`,
        );
  }
}
