import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl のクライアント名
 * -----------------------------------------------------------------------------
 *
 * Toggl のクライアント名を扱う。
 */
export class TogglClientName extends DomainPrimitive<"TogglClientName"> {
  readonly type = "TogglClientName";

  constructor(readonly value: string) {
    super();

    this.value = z.string().min(1).max(30).parse(value);
  }
}
