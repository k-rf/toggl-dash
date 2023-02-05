import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

export class Day extends DomainPrimitive<"Day"> {
  readonly type = "Day";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(1).max(31).parse(value);
  }
}
