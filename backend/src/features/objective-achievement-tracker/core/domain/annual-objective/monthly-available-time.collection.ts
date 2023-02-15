import { DomainError } from "~/error/domain.error";
import { Collection } from "~/shared/v2/collection";

import { MonthlyAvailableTime } from "./monthly-available-time";

export class MonthlyAvailableTimeCollection extends Collection<
  MonthlyAvailableTime,
  "MonthlyAvailableTimeCollection"
> {
  readonly type = "MonthlyAvailableTimeCollection";

  constructor(value: MonthlyAvailableTime[]) {
    if (value.length !== 12) {
      throw new DomainError(`The num of value is 12: this length is ${value.length}.`);
    }

    super(value);
  }
}
