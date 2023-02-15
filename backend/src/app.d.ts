type Frozen<T> = T extends CallableFunction ? T : { readonly [K in keyof T]: Frozen<T[K]> };

type Property<T> = {
  [K in keyof T as T[K] extends CallableFunction ? never : K extends "type" ? never : K]: T[K];
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Prettify<T> = { [K in keyof T]: T[K] } & {};
