import { Entity } from "~/shared/v2/entity";

import { AchievementId } from "./achievement-id";
import { DailyReportCollection, MonthlyReportCollection } from "./report";

export class Achievement extends Entity<"Achievement"> {
  readonly type = "Achievement";

  readonly id: AchievementId;
  readonly dailyReports: DailyReportCollection;
  readonly monthlyReports: MonthlyReportCollection;

  constructor(props: Property<Achievement>) {
    super();

    this.id = props.id;
    this.dailyReports = props.dailyReports;
    this.monthlyReports = props.monthlyReports;
  }
}
