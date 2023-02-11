import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * 0 以上 59 以下の整数を持つ値
 */
export class Second extends DomainPrimitive<"Second"> {
  readonly type = "Second";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(0).max(59).parse(value);
  }
}
