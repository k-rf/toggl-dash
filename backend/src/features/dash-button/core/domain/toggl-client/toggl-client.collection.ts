import { Collection } from "~/shared/v2/collection";

import { TogglClient } from "./toggl-client";

export class TogglClientCollection extends Collection<TogglClient, "TogglClientCollection"> {
  readonly type = "TogglClientCollection";
}
