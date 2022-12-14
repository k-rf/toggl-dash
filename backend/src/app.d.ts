type Property<T> = {
  [K in keyof T as T[K] extends CallableFunction ? never : K extends "type" ? never : K]: T[K];
};
