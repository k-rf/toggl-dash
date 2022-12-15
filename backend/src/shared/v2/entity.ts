import { Uuid } from "./uuid";

export abstract class Entity<T extends string> {
  abstract readonly type: T;

  abstract readonly id: Uuid<string>;

  eq(that: Entity<T>): boolean {
    return this.id.eq(that.id);
  }
}
