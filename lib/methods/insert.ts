import { ByteDatabase } from '..';
import { ByteError } from '../structures/ByteError';
import { DEFAULT_TABLE } from '../util/constants';
import { set } from 'lodash';
import { RowManager } from '../structures/RowManager';
import { Data } from '../typings/types/Data';

export function insert(
  key: string,
  value: any,
  table: string = DEFAULT_TABLE,
  db: ByteDatabase,
) {
  const _rows = new RowManager(db);

  if (typeof key !== 'string')
    throw new ByteError(
      'INVALID_TYPE',
      `Expected a type of string in method "INSERT". Recieved a type of ${typeof key} instead.\n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`,
    );
  if (!value)
    throw new ByteError(
      'MISSING_ARGUMENT',
      `Expected 2 arguments in method "INSERT" . \n If you need help, consider joining our Discord Server!: https://join.cloudteam.me`,
    );

  if (key.includes('.')) {
    let splitted = key.split('.');
    let ParentKey = splitted[0];
    let got = db.find(ParentKey) as object;
    let _ = set(got ?? {}, splitted.slice(1).join('.'), value);

    return _rows.insertRowByKey(ParentKey, _ as Data, table);
  } else {
    let got = db.find(key) as object;
    let _ = set(got ?? {}, key, value);

    return _rows.insertRowByKey(key, _ as Data, table);
  }
}
