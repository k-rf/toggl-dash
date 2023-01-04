import { Entity } from "~/shared/v2/entity";

import { TogglClientName, TogglClientId } from "../toggl-client";
import { TogglProjectName, TogglProjectId } from "../toggl-project";

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
  readonly client: TogglClientName;
  readonly clientId: TogglClientId;
  readonly project: TogglProjectName;
  readonly projectId: TogglProjectId;
  readonly description: TogglEntryDescription;

  constructor(props: Property<TogglEntry>) {
    super();

    this.id = props.id;
    this.client = props.client;
    this.clientId = props.clientId;
    this.project = props.project;
    this.projectId = props.projectId;
    this.description = props.description;
  }
}
