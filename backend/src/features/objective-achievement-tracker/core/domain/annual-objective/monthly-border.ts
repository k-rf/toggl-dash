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

  toPrimitive() {
    return {
      month: this.month.toPrimitive(),
      border: this.border.toPrimitive(),
    } as const satisfies Record<keyof Property<MonthlyBorder>, unknown>;
  }
}
