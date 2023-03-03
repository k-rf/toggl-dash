import { TogglClientId } from "~/features/dash-button/core/domain/toggl-client";
import { DomainPrimitive } from "~/shared/v2/domain-primitive";

import { HmsTime } from "../date-time";

export class Objective extends DomainPrimitive<"Objective"> {
  readonly type = "Objective";

  readonly clientId: TogglClientId;
  readonly objectiveTime: HmsTime;

  constructor(props: Property<Objective>) {
    super();

    this.clientId = props.clientId;
    this.objectiveTime = props.objectiveTime;
  }

  toPrimitive() {
    return {
      clientId: this.clientId.toPrimitive(),
      objectiveTime: this.objectiveTime.toPrimitive(),
    } as const satisfies Record<keyof Property<Objective>, unknown>;
  }
}
