import { Collection } from "~/shared/v2/collection";

import { MonthlyBorder } from "./monthly-border";

export class MonthlyBorderCollection extends Collection<MonthlyBorder, "MonthlyBorderCollection"> {
  readonly type = "MonthlyBorderCollection";
}
