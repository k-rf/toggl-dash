type Prettify<T> = { [K in keyof T]: T[K] } extends infer U ? U : never;
