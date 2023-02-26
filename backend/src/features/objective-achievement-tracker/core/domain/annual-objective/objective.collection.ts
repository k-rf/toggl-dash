import { Collection } from "~/shared/v2/collection";

import { Objective } from "./objective";

export class ObjectiveCollection extends Collection<Objective, "ObjectiveCollection"> {
  readonly type = "ObjectiveCollection";

  toPrimitive() {
    return this.value.map((e) => {
      return e.toPrimitive();
    });
  }
}
