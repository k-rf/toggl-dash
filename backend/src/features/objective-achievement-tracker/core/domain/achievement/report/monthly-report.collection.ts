import { DomainError } from "~/error/domain.error";
import { Collection } from "~/shared/v2/collection";

import { MonthlyReport } from "./monthly-report";

export class MonthlyReportCollection extends Collection<MonthlyReport, "MonthlyReportCollection"> {
  readonly type = "MonthlyReportCollection";

  constructor(value: MonthlyReport[]) {
    if (12 < value.length) {
      throw new DomainError(`The max length is 12: this length is ${value.length}`);
    }

    super(value);
  }
}
