import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl のクライアント ID
 * -----------------------------------------------------------------------------
 *
 * Toggl のクライアント ID を扱う。
 *
 * この値は自由に決めて良い値ではない。
 * Toggl 上で Client と合わせて登録されている ID が指定されることになる。
 */
export class TogglClientId extends DomainPrimitive<"TogglClientId"> {
  readonly type = "TogglClientId";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(1).parse(value);
  }

  toPrimitive() {
    return this.value;
  }
}
