import { Options } from 'better-sqlite3';
import { If } from '../types';

export interface DefaultByteProperties<T extends boolean = boolean>
  extends Options {
  sanitize: If<T, boolean, null>;
  logExecutionTime: If<T, boolean, null>;
  colorizeLoggedMessages: If<T, boolean, null>;
}
