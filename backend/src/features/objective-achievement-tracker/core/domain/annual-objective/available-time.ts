import { DomainPrimitive } from "~/shared/v2/domain-primitive";

import { HmsTime, Day } from "../date-time";

export class AvailableTime extends DomainPrimitive<"AvailableTime"> {
  readonly type = "AvailableTime";

  readonly time: HmsTime;
  readonly weight: Day;

  constructor(props: Property<AvailableTime>) {
    super();

    this.time = props.time;
    this.weight = props.weight;
  }

  toPrimitive() {
    const { hour, minute, second } = this.time;

    return {
      time: [hour.value, minute.value, second.value],
      weight: this.weight.value,
    } as const satisfies Record<keyof Property<AvailableTime>, unknown>;
  }
}
