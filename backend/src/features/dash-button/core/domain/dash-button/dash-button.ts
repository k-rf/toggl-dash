import { Entity } from "~/shared/v2/entity";

import { DashButtonId } from "./dash-button-id";
import { DashButtonOrder } from "./dash-button-order";
import { DashButtonSummary } from "./dash-button-summary";

/**
 * ダッシュボタン
 * -----------------------------------------------------------------------------
 *
 * Toggl のタイマーを操作したり、データを取得するための情報を扱う。
 */
export class DashButton extends Entity<"DashButton"> {
  readonly type = "DashButton";

  readonly id: DashButtonId;
  readonly summary: DashButtonSummary;
  readonly order: DashButtonOrder;

  constructor(props: Property<DashButton>) {
    super();

    this.id = props.id;
    this.summary = props.summary;
    this.order = props.order;
  }
}
