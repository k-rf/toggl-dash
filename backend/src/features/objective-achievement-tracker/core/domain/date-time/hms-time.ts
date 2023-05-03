import { DomainPrimitive } from "~/shared/v2/domain-primitive";

import { Hour } from "./hour";
import { Minute } from "./minute";
import { Second } from "./second";

export class HmsTime extends DomainPrimitive<"HmsTime"> {
  readonly type = "HmsTime";

  readonly hour: Hour;
  readonly minute: Minute;
  readonly second: Second;

  constructor(hours: number, minutes: number, seconds: number) {
    super();

    this.hour = new Hour(hours);
    this.minute = new Minute(minutes);
    this.second = new Second(seconds);
  }

  toPrimitive() {
    const { hour, minute, second } = this;

    return [hour.toPrimitive(), minute.toPrimitive(), second.toPrimitive()] as const;
  }
}
