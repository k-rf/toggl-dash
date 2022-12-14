import { z } from "zod";

import { DomainPrimitive } from "~/shared/v2/domain-primitive";

/**
 * ダッシュボタンの概要
 * -----------------------------------------------------------------------------
 *
 * ダッシュボタンに常に表示する内容を扱う。
 * Toggl では Description がこれに該当する。
 */
export class DashButtonSummary implements DomainPrimitive<"DashButtonSummary"> {
  readonly type = "DashButtonSummary";

  constructor(readonly value: string) {
    this.value = z.string().min(1).max(30).parse(value);
  }

  equals(that: DashButtonSummary): boolean {
    return this.value === that.value;
  }
}
