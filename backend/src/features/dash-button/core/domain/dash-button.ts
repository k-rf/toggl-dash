import { Entity } from "~/shared/v2/entity";

import { DashButtonId } from "./dash-button-id";
import { DashButtonSummary } from "./dash-button-summary";

/**
 * ダッシュボタン
 * -----------------------------------------------------------------------------
 *
 * Toggl のタイマーを操作したり、データを取得するための情報を扱う。
 */
export class DashButton implements Entity<"DashButton"> {
  readonly type = "DashButton";

  readonly id: DashButtonId;
  readonly summary: DashButtonSummary;

  constructor(value: Property<DashButton>) {
    this.id = value.id;
    this.summary = value.summary;
  }

  equals(that: DashButton): boolean {
    return this.id.equals(that.id);
  }
}
