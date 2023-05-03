import { DomainError } from "~/error/domain.error";
import { Collection } from "~/shared/v2/collection";

import { DailyReport } from "./daily-report";

export class DailyReportCollection extends Collection<DailyReport, "DailyReportCollection"> {
  readonly type = "DailyReportCollection";

  constructor(value: DailyReport[]) {
    if (366 < value.length) {
      throw new DomainError(`The max length is 366: this length is ${value.length}`);
    }

    super(value);
  }
}
