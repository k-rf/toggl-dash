import { Collection } from "~/shared/v2/collection";

import { AnnualObjective } from "./annual-objective";

export class AnnualObjectiveCollection extends Collection<
  AnnualObjective,
  "AnnualObjectiveCollection"
> {
  readonly type = "AnnualObjectiveCollection";

  toPrimitive() {
    return this.value.map((e) => {
      return e.toPrimitive();
    });
  }
}
