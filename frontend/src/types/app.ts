declare global {
  type Prettify<T> = { [K in keyof T]: T[K] } extends infer U ? U : never;

  type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export {};
