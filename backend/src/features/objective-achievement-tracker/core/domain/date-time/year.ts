import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

export class Year extends DomainPrimitive<"Year"> {
  readonly type = "Year";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().positive().parse(value);
  }
}
