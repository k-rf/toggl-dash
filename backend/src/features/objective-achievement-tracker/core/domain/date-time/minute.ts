import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * 0 以上 59 以下の整数を持つ値
 */
export class Minute extends DomainPrimitive<"Minute"> {
  readonly type = "Minute";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(0).max(59).parse(value);
  }

  toPrimitive() {
    return this.value;
  }
}
