import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl エントリーの詳細
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーの詳細を扱う。
 */
export class TogglEntryDescription extends DomainPrimitive<"TogglEntryDescription"> {
  readonly type = "TogglEntryDescription";

  constructor(readonly value: string) {
    super();

    this.value = z.string().min(1).max(30).parse(value);
  }

  toPrimitive() {
    return this.value;
  }
}
