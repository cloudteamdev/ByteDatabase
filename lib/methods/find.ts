import { ByteDatabase } from '..';
import { ByteError } from '../structures/ByteError';
import { DEFAULT_TABLE } from '../util/constants';
import { get } from 'lodash';
import { RowManager } from '../structures/RowManager';

export function find(
  key: string,
  table: string = DEFAULT_TABLE,
  db: ByteDatabase,
) {
  const _rows = new RowManager(db);

  if (typeof key !== 'string')
    throw new ByteError(
      'INVALID_TYPE',
      `Expected a type of string in method "FIND". Recieved a type of ${typeof key} instead. \nIf you need help, consider joining our Discord Server!: https://join.cloudteam.me`,
    );
  if (!key.includes('.')) {
    let result = _rows.findRowByKey(key, table);
    return get(result, key);
  } else {
    let splitted = key.split('.');
    let ParentKey = splitted[0];

    const result = _rows.findRowByKey(ParentKey, table);
    return get(result, splitted.slice(1).join('.'));
  }
}
