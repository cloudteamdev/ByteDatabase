import { ByteDatabase } from '../index';
import { sanitize } from '../functions/sanitize';
import { DEFAULT_TABLE } from '../util/constants';

export class RowManager {
  _database: ByteDatabase;

  constructor(db: ByteDatabase) {
    this._database = db;
  }

  insertRowByKey(
    key: string,
    value: Record<string, unknown> | string | unknown[],
    table: string = DEFAULT_TABLE,
  ) {
    const val = value !== 'string' ? JSON.stringify(value) : value;
    const query = this._database.options.sanitize
      ? sanitize(`INSERT INTO ${table} (ID,Json) VALUES (?,?)`)
      : `INSERT INTO ${table} (ID,Json) VALUES (?,?)`;
    return this._database._raw.prepare(query).run(key, val);
  }

  updateRowByKey(
    key: string,
    value: Record<string, unknown> | string | unknown[],
    table: string = DEFAULT_TABLE,
  ) {
    const val = value !== 'string' ? JSON.stringify(value) : value;
    const query = this._database.options.sanitize
      ? sanitize(`UPDATE ${table} SET Json = (?) WHERE ID = (?)`)
      : `UPDATE ${table} SET Json = (?) WHERE ID = (?)`;
    return this._database._raw.prepare(query).run(key, val);
  }

  findRowByKey(key: string, table: string = DEFAULT_TABLE) {
    const query = this._database.options.sanitize
      ? sanitize(`SELECT Json FROM ${table} WHERE ID = @key`)
      : `SELECT Json FROM ${table} WHERE ID = @key`;
    const val = this._database._raw.prepare(query).get({ key });
    return val != null ? JSON.parse(val.Json) : null;
  }

  findAllRows(table: string = DEFAULT_TABLE) {
    const query = this._database.options.sanitize
      ? sanitize(`SELECT * FROM ${table}`)
      : `SELECT * FROM ${table}`;
    const val = this._database._raw.prepare(query).iterate();
    const data: object[] = [];
    for (const i of val) {
      data.push({
        ID: i.ID,
        JSON: i.Json,
        TABLE: table,
      });
    }

    return data;
  }

  deleteAllRows(table: string = DEFAULT_TABLE) {
    const query = this._database.options.sanitize
      ? sanitize(`DELETE FROM ${table}`)
      : `DELETE FROM ${table}`;
    return this._database._raw.prepare(query).run();
  }

  deleteRowByKey(key: string, table: string = DEFAULT_TABLE) {
    const query = this._database.options.sanitize
      ? sanitize(`DELETE FROM ${table} WHERE ID = @key`)
      : `DELETE FROM ${table} WHERE ID = @key`;
    return this._database._raw.prepare(query).run({ key });
  }
}
