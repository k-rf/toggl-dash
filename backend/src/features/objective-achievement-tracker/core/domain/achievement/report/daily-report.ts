import { Entity } from "~/shared/v2/entity";

import { YmdDate, HmsTime } from "../../date-time";

import { DailyReportId } from "./daily-report-id";

export class DailyReport extends Entity<"DailyReport"> {
  readonly type = "DailyReport";

  readonly id: DailyReportId;
  readonly date: YmdDate;
  readonly actualTime: HmsTime;

  constructor(props: Property<DailyReport>) {
    super();

    this.id = props.id;
    this.date = props.date;
    this.actualTime = props.actualTime;
  }
}
