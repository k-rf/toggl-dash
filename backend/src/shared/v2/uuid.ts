import { v4 as uuidV4 } from "uuid";
import { z } from "zod";

import { DomainPrimitive } from "./domain-primitive";

export abstract class Uuid<T extends string> implements DomainPrimitive<T> {
  abstract readonly type: T;

  readonly value: string;

  constructor(value?: string) {
    if (value === null || value === undefined) {
      this.value = uuidV4();
    } else {
      this.value = z.string().uuid().parse(value);
    }
  }

  eq(that: Uuid<T>): boolean {
    return this.value === that.value;
  }

  toPrimitive() {
    return this.value;
  }
}
