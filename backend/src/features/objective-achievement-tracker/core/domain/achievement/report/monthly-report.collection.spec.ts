import { range } from "~/util/range";

import { HmsTime, Month } from "../../date-time";

import { MonthlyReport } from "./monthly-report";
import { MonthlyReportId } from "./monthly-report-id";
import { MonthlyReportCollection } from "./monthly-report.collection";

describe("MonthlyReportCollection", () => {
  const monthlyReport = new MonthlyReport({
    id: new MonthlyReportId(),
    actualTime: new HmsTime(100, 0, 0),
    month: new Month(1),
  });

  it("要素数が 12 以下のとき、生成できる", () => {
    const monthlyReports = new MonthlyReportCollection(range(12).map(() => monthlyReport));

    expect(monthlyReports.length).toStrictEqual(12);
  });

  it("要素数が 13 以上のとき、生成できない", () => {
    expect(() => new MonthlyReportCollection(range(13).map(() => monthlyReport))).toThrow();
  });
});
