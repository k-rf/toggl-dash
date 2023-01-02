import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl エントリーのプロジェクト
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーのプロジェクトを扱う。
 */
export class TogglEntryProject extends DomainPrimitive<"TogglEntryProject"> {
  readonly type = "TogglEntryProject";

  constructor(readonly value: string) {
    super();

    this.value = z.string().min(1).max(30).parse(value);
  }
}
