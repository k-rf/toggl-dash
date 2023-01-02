import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl エントリーのクライアント
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーのクライアントを扱う。
 */
export class TogglEntryClient extends DomainPrimitive<"TogglEntryClient"> {
  readonly type = "TogglEntryClient";

  constructor(readonly value: string) {
    super();

    this.value = z.string().min(1).max(30).parse(value);
  }
}
