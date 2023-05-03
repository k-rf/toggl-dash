import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

export class Month extends DomainPrimitive<"Month"> {
  readonly type = "Month";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(0).parse(value);
  }

  toPrimitive() {
    return this.value;
  }
}
