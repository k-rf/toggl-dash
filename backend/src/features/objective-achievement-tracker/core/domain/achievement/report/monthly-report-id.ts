import { Uuid } from "~/shared/v2/uuid";

export class MonthlyReportId extends Uuid<"MonthlyReportId"> {
  readonly type = "MonthlyReportId";
}
