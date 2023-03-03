import { Dto } from "~/shared/v2/dto";

import { HmsTime, AvailableTime } from "./types";

export class RegisterAnnualObjectiveWorkflowInput extends Dto<"RegisterAnnualObjectiveWorkflowInput"> {
  readonly type = "RegisterAnnualObjectiveWorkflowInput";

  readonly year: number;
  readonly objectives: {
    clientId: number;
    objectiveTime: HmsTime;
  }[];
  readonly monthlyAvailableTimes: {
    month: number;
    weekday: AvailableTime;
    holiday: AvailableTime;
    offDay: number;
  }[];

  constructor(props: Property<RegisterAnnualObjectiveWorkflowInput>) {
    super();

    this.year = props.year;
    this.objectives = props.objectives;
    this.monthlyAvailableTimes = props.monthlyAvailableTimes;
  }
}
