import { DomainPrimitive } from "~/shared/v2/domain-primitive";

import { Day, HmsTime, Month } from "../date-time";

import { AvailableTime } from "./available-time";

type Props = Prettify<
  Property<Omit<MonthlyAvailableTime, "offDay">> & {
    offDay: Day;
  }
>;
export class MonthlyAvailableTime extends DomainPrimitive<"MonthlyAvailableTime"> {
  readonly type = "MonthlyAvailableTime";

  readonly month: Month;
  readonly weekday: AvailableTime;
  readonly holiday: AvailableTime;
  readonly offDay: AvailableTime;

  constructor(props: Props) {
    super();

    this.month = props.month;
    this.weekday = props.weekday;
    this.holiday = props.holiday;
    this.offDay = new AvailableTime({ time: new HmsTime(0, 0, 0), weight: props.offDay });
  }

  // TODO
  // total(): HmsTime {}

  toPrimitive() {
    return {
      month: this.month.toPrimitive(),
      weekday: this.weekday.toPrimitive(),
      holiday: this.holiday.toPrimitive(),
      offDay: this.offDay.toPrimitive().weight,
    } as const satisfies Record<keyof Property<MonthlyAvailableTime>, unknown>;
  }
}
