import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl エントリーのクライアント ID
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーのクライアント ID を扱う。
 *
 * この値は自由に決めて良い値ではない。
 * Toggl 上で Client と合わせて登録されている ID が指定されることになる。
 */
export class TogglEntryClientId extends DomainPrimitive<"TogglEntryClientId"> {
  readonly type = "TogglEntryClientId";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(1).parse(value);
  }
}
