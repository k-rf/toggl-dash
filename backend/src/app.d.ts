type Frozen<T> = T extends CallableFunction ? T : { readonly [K in keyof T]: Frozen<T[K]> };

type Property<T> = {
  [K in keyof T as T[K] extends CallableFunction ? never : K extends "type" ? never : K]: T[K];
};

type Prettify<T> = { [K in keyof T]: T[K] } extends infer U ? U : never;

type Result<T, E = undefined> = { ok: true; value: T } | { ok: false; error: E | undefined };
