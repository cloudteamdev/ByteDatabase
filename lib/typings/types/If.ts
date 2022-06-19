export declare type If<
  T extends boolean,
  K,
  V = unknown,
> = T extends true ? K : K | V;
