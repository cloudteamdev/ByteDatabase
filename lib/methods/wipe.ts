import { ByteDatabase } from '..';
import { RowManager } from '../structures/RowManager';
import { DEFAULT_TABLE } from '../util/constants';

export function wipe(table: string = DEFAULT_TABLE, db: ByteDatabase) {
  const _rows = new RowManager(db);
  return _rows.deleteAllRows(table);
}
