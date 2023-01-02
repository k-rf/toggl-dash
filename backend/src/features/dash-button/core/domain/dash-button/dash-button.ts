import { Entity } from "~/shared/v2/entity";

import { TogglEntry } from "../toggl-entry";

import { DashButtonId } from "./dash-button-id";
import { DashButtonOrder } from "./dash-button-order";

/**
 * ダッシュボタン
 * -----------------------------------------------------------------------------
 *
 * Toggl のタイマーを操作したり、データを取得するための情報を扱う。
 */
export class DashButton extends Entity<"DashButton"> {
  readonly type = "DashButton";

  readonly id: DashButtonId;
  readonly order: DashButtonOrder;
  readonly togglEntry: TogglEntry;

  constructor(props: Property<DashButton>) {
    super();

    this.id = props.id;
    this.order = props.order;
    this.togglEntry = props.togglEntry;
  }
}
