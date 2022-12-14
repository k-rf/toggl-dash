import { v4 as uuidV4 } from "uuid";
import { z } from "zod";

import { DomainPrimitive } from "./domain/domain-primitive";

export abstract class Uuid<T extends string> extends DomainPrimitive<string, T> {
  protected validate(value: string): string {
    try {
      return z.string().uuid().parse(value);
    } catch (e) {
      throw new Error((e as z.ZodError).issues.at(0)?.message);
    }
  }

  constructor(value?: string) {
    super(value === null || value === undefined ? uuidV4() : value);
  }
}
