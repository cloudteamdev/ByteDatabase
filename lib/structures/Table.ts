import { ByteDatabase } from '../index';
import { CREATE_TABLE_REGEX } from '../util/constants';
import { ByteError } from './ByteError';

export class Table {
  constructor(name: string, db: ByteDatabase) {
    if (CREATE_TABLE_REGEX.test(name)) {
      return db._raw
        .prepare(`CREATE TABLE IF NOT EXISTS ${name} (ID TEXT, Json TEXT)`)
        .run();
    } else {
      throw new ByteError(
        'INVALID_TABLE_NAME',
        `Table name ${name} does not follow the regex ${CREATE_TABLE_REGEX}. Table names accepts only alphanumerical values.`,
      );
    }
  }
}
