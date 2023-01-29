import { Entity } from "~/shared/v2/entity";

import { TogglProjectId } from "./toggl-project-id";
import { TogglProjectName } from "./toggl-project-name";

/**
 * Toggl プロジェクト
 * -----------------------------------------------------------------------------
 *
 * Toggl プロジェクトを扱う。
 */
export class TogglProject extends Entity<"TogglProject"> {
  readonly type = "TogglProject";

  readonly id: TogglProjectId;
  readonly name: TogglProjectName;

  constructor(props: Property<TogglProject>) {
    super();

    this.id = props.id;
    this.name = props.name;
  }
}
