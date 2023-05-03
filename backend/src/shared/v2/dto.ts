export abstract class Dto<T extends string> {
  abstract readonly type: T;
}
