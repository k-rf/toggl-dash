import { Entity } from "~/shared/v2/entity";

import { TogglEntryClient } from "./toggl-entry-client";
import { TogglEntryClientId } from "./toggl-entry-client-id";
import { TogglEntryDescription } from "./toggl-entry-description";
import { TogglEntryId } from "./toggl-entry-id";
import { TogglEntryProject } from "./toggl-entry-project";
import { TogglEntryProjectId } from "./toggl-entry-project-id";

/**
 * Toggl エントリー
 * -----------------------------------------------------------------------------
 *
 * Toggl エントリーを扱う。
 */
export class TogglEntry extends Entity<"TogglEntry"> {
  readonly type = "TogglEntry";

  readonly id: TogglEntryId;
  readonly client: TogglEntryClient;
  readonly clientId: TogglEntryClientId;
  readonly project: TogglEntryProject;
  readonly projectId: TogglEntryProjectId;
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
