import { insert } from './insert';
import { find } from './find';
import { all } from './all';
import { wipe } from './wipe';
import { del } from './delete';

export const methods = {
  insert,
  all,
  wipe,
  find,
  delete: del
} as const;
