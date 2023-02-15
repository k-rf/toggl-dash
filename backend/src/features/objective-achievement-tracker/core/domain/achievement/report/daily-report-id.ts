import { Uuid } from "~/shared/v2/uuid";

export class DailyReportId extends Uuid<"DailyReportId"> {
  readonly type = "DailyReportId";
}
