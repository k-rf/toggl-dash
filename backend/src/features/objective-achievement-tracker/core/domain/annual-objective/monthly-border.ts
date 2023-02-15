import { DomainPrimitive } from "~/shared/v2/domain-primitive";

import { HmsTime, Month } from "../date-time";

export class MonthlyBorder extends DomainPrimitive<"MonthlyBorder"> {
  readonly type = "MonthlyBorder";

  readonly month: Month;
  readonly border: HmsTime;

  constructor(props: Property<MonthlyBorder>) {
    super();

    this.month = props.month;
    this.border = props.border;
  }
}
