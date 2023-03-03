import { Dto } from "~/shared/v2/dto";

import { HmsTime, AvailableTime } from "./types";

export class RegisterAnnualObjectiveWorkflowOutput extends Dto<"RegisterAnnualObjectiveWorkflowOutput"> {
  readonly type = "RegisterAnnualObjectiveWorkflowOutput";

  readonly id: string;
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

  constructor(props: Property<RegisterAnnualObjectiveWorkflowOutput>) {
    super();

    this.id = props.id;
    this.year = props.year;
    this.objectives = props.objectives;
    this.monthlyAvailableTimes = props.monthlyAvailableTimes;
  }
}
