import { ByteDatabase } from '../main';

export function findTables(db: ByteDatabase) {
  const tables = db._raw
    .prepare(
      `SELECT * FROM sqlite_schema WHERE type = 'table' AND name NOT LIKE 'sqlite_%'`,
    )
    .all();
  return tables;
}
