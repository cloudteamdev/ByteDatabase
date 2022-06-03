import { ByteDatabase } from '..';
import { RowManager } from '../structures/RowManager';
import { DEFAULT_TABLE } from '../util/constants';

export function del(
  key: string,
  table: string = DEFAULT_TABLE,
  db: ByteDatabase,
) {
  const _rows = new RowManager(db);
  return _rows.deleteRowByKey(key, table);
}
