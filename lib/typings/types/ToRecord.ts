/**
 * Converts an interface to a typed record
 */
export type ToRecord<T> = {
  [P in keyof T]: T[P];
};
