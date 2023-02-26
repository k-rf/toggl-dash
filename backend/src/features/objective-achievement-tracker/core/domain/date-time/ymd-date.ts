import { DomainPrimitive } from "~/shared/v2/domain-primitive";

import { Day } from "./day";
import { Month } from "./month";
import { Year } from "./year";

export class YmdDate extends DomainPrimitive<"YmdDate"> {
  readonly type = "YmdDate";

  readonly year: Year;
  readonly month: Month;
  readonly day: Day;

  constructor(year: number, month: number, day: number) {
    super();

    this.year = new Year(year);
    this.month = new Month(month);
    this.day = new Day(day);
  }

  toPrimitive() {
    const { year, month, day } = this;

    return [year.toPrimitive(), month.toPrimitive(), day.toPrimitive()] as const;
  }
}
