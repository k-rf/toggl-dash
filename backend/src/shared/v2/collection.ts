import { DomainPrimitive } from "./domain-primitive";
import { Entity } from "./entity";

export abstract class Collection<
  T extends Entity<string> | DomainPrimitive<string>,
  U extends string
> {
  abstract readonly type: U;

  constructor(readonly value: T[]) {}

  at(index: number) {
    return this.value.at(index);
  }
}
