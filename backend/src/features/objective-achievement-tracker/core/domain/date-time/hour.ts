import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

export class Hour extends DomainPrimitive<"Hour"> {
  readonly type = "Hour";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(0).parse(value);
  }
}
