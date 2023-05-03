import { range } from "~/util/range";

import { HmsTime, YmdDate } from "../../date-time";

import { DailyReport } from "./daily-report";
import { DailyReportId } from "./daily-report-id";
import { DailyReportCollection } from "./daily-report.collection";

describe("DailyReportCollection", () => {
  const dailyReport = new DailyReport({
    id: new DailyReportId(),
    actualTime: new HmsTime(5, 0, 0),
    date: new YmdDate(2023, 1, 1),
  });

  it("要素数が 366 以下のとき、生成できる", () => {
    const dailyReports = new DailyReportCollection(range(366).map(() => dailyReport));

    expect(dailyReports.length).toStrictEqual(366);
  });

  it("要素数が 367 以上のとき、生成できない", () => {
    expect(() => new DailyReportCollection(range(367).map(() => dailyReport))).toThrow();
  });
});
