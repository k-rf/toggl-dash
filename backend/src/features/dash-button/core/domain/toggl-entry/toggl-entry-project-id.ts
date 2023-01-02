import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl エントリーのプロジェクト ID
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーのプロジェクト ID を扱う。
 *
 * この値は自由に決めて良い値ではない。
 * Toggl 上で Project と合わせて登録されている ID が指定されることになる。
 */
export class TogglEntryProjectId extends DomainPrimitive<"TogglEntryProjectId"> {
  readonly type = "TogglEntryProjectId";

  constructor(readonly value: number) {
    super();

    this.value = z.number().int().min(1).parse(value);
  }
}
