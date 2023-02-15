import { Entity } from "~/shared/v2/entity";

import { Year, HmsTime } from "../date-time";

import { AnnualObjectiveId } from "./annual-objective-id";

export class AnnualObjective extends Entity<"AnnualObjective"> {
  readonly type = "AnnualObjective";

  readonly id: AnnualObjectiveId;
  readonly year: Year;
  readonly objectiveTime: HmsTime;
  // readonly achievement?: Achievement; // TODO
  // readonly monthlyAvailableTimes: MonthlyAvailableTimeList; // TODO
  // readonly monthlyBorders: MonthlyBorderList // TODO 値で持つのではなく算出する系かも

  constructor(props: Property<AnnualObjective>) {
    super();

    this.id = props.id;
    this.year = props.year;
    this.objectiveTime = props.objectiveTime;
  }
}
