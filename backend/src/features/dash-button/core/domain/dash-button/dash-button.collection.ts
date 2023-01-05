import { Collection } from "~/shared/v2/collection";

import { DashButton } from "./dash-button";

export class DashButtonCollection extends Collection<DashButton, "DashButtonCollection"> {
  readonly type = "DashButtonCollection";
}
