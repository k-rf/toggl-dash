import { Entity } from "~/shared/v2/entity";

import { TogglClientId } from "./toggl-client-id";
import { TogglClientName } from "./toggl-client-name";

/**
 * Toggl クライアント
 *
 * -----------------------------------------------------------------------------
 *
 * Toggl クライアントを扱う。
 */
export class TogglClient extends Entity<"TogglClient"> {
  readonly type = "TogglClient";

  readonly id: TogglClientId;
  readonly name: TogglClientName;

  constructor(props: Property<TogglClient>) {
    super();

    this.id = props.id;
    this.name = props.name;
  }
}
