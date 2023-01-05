import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * Toggl のプロジェクト名
 * -----------------------------------------------------------------------------
 *
 * Toggl のプロジェクト名を扱う。
 */
export class TogglProjectName extends DomainPrimitive<"TogglProjectName"> {
  readonly type = "TogglProjectName";

  constructor(readonly value: string) {
    super();

    this.value = z.string().min(1).max(30).parse(value);
  }
}
