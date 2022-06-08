import { ByteDatabase } from '../index';
import { DEFAULT_TABLE } from '../util/constants';

export class RowManager {
  private readonly _database: ByteDatabase;

  constructor(db: ByteDatabase) {
    this._database = db;
  }

  insertRowByKey(
    key: string,
    value: Record<string, unknown> | string | number | unknown[],
    table: string = DEFAULT_TABLE,
  ) {
    value = value !== 'string' ? JSON.stringify(value) : value;
    table = this.trySanitize(table)
    return this._database._raw
      .prepare(`INSERT INTO ${table} (ID,Json) VALUES (?,?)`)
      .run(key, value);
  }

  updateRowByKey(
    key: string,
    value: Record<string, unknown> | string | number | unknown[],
    table: string = DEFAULT_TABLE,
  ) {
    value = value !== 'string' ? JSON.stringify(value) : value;
    table = this.trySanitize(table)
    return this._database._raw
      .prepare(`UPDATE ${table} SET Json = (?) WHERE ID = (?)`)
      .run(key, value);
  }

  private trySanitize(...args: Parameters<ByteDatabase["trySanitize"]>) {
    return this._database["trySanitize"](...args)
  }

  findRowByKey(key: string, table: string = DEFAULT_TABLE) {
    table = this.trySanitize(table)
    const val = this._database._raw
      .prepare(`SELECT Json FROM ${table} WHERE ID = @key`)
      .get({ key });
    return val != null ? JSON.parse(val.Json) : null;
  }

  findAllRows(table: string = DEFAULT_TABLE) {
    table = this.trySanitize(table)
    const val = this._database._raw.prepare(`SELECT * FROM ${table}`).iterate();
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
    table = this.trySanitize(table)
    return this._database._raw.prepare(`DELETE FROM ${table}`).run();
  }

  deleteRowByKey(key: string, table: string = DEFAULT_TABLE) {
    table = this.trySanitize(table)
    return this._database._raw
      .prepare(`DELETE FROM ${table} WHERE ID = @key`)
      .run({ key });
  }
}
