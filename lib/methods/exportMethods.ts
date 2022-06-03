import { insert } from './insert';
import { find } from './find';
import { all } from './all';
import { wipe } from './wipe';
import { del } from './delete';

export const methods = {
  insert: insert,
  find: find,
  all: all,
  wipe: wipe,
  delete: del,
};
