import { Entity } from "~/shared/v2/entity";

import { TogglClientId } from "../toggl-client";
import { TogglProjectId } from "../toggl-project";

import { TogglEntryDescription } from "./toggl-entry-description";
import { TogglEntryId } from "./toggl-entry-id";

/**
 * Toggl エントリー
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーを扱う。
 */
export class TogglEntry extends Entity<"TogglEntry"> {
  readonly type = "TogglEntry";

  readonly id: TogglEntryId;
  readonly clientId: TogglClientId;
  readonly projectId: TogglProjectId;
  readonly description: TogglEntryDescription;

  constructor(props: Property<TogglEntry>) {
    super();

    this.id = props.id;
    this.clientId = props.clientId;
    this.projectId = props.projectId;
    this.description = props.description;
  }
}
