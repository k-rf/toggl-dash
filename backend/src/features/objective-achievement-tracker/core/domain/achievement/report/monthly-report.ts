import { Entity } from "~/shared/v2/entity";

import { Month, HmsTime } from "../../date-time";

import { MonthlyReportId } from "./monthly-report-id";

export class MonthlyReport extends Entity<"MonthlyReport"> {
  readonly type = "MonthlyReport";

  readonly id: MonthlyReportId;
  readonly month: Month;
  readonly actualTime: HmsTime;

  constructor(props: Property<MonthlyReport>) {
    super();

    this.id = props.id;
    this.month = props.month;
    this.actualTime = props.actualTime;
  }
}
