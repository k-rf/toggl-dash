import { Entity } from "~/shared/v2/entity";

import { TogglEntryClient } from "./toggl-entry-client";
import { TogglEntryDescription } from "./toggl-entry-description";
import { TogglEntryId } from "./toggl-entry-id";
import { TogglEntryProject } from "./toggl-entry-project";

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
  readonly project: TogglEntryProject;
  readonly description: TogglEntryDescription;

  constructor(props: Property<TogglEntry>) {
    super();

    this.id = props.id;
    this.client = props.client;
    this.project = props.project;
    this.description = props.description;
  }
}
