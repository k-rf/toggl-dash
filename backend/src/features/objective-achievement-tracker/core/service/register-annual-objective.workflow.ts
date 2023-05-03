import { Injectable, Logger } from "@nestjs/common";

import { TogglClientId } from "~/features/dash-button/core/domain/toggl-client";

import {
  AnnualObjective,
  AnnualObjectiveId,
  AvailableTime,
  MonthlyAvailableTime,
  MonthlyAvailableTimeCollection,
  Objective,
  ObjectiveCollection,
} from "../domain/annual-objective";
import { AnnualObjectiveRepository } from "../domain/annual-objective/annual-objective.repository";
import { Day, HmsTime, Month, Year } from "../domain/date-time";

import { RegisterAnnualObjectiveWorkflowInput } from "./register-annual-objective.workflow.input";
import { RegisterAnnualObjectiveWorkflowOutput } from "./register-annual-objective.workflow.output";

@Injectable()
export class RegisterAnnualObjectiveWorkflow {
  private logger = new Logger(RegisterAnnualObjectiveWorkflow.name);

  constructor(private readonly repository: AnnualObjectiveRepository) {}

  async handle(input: RegisterAnnualObjectiveWorkflowInput) {
    this.logger.log("Start to register annual objective workflow.");
    const annualObjective = this.createAnnualObjective(input);

    await this.repository.save(annualObjective);

    this.logger.log("End to register annual objective workflow.");
    return new RegisterAnnualObjectiveWorkflowOutput(annualObjective.toPrimitive());
  }

  private createAnnualObjective(input: RegisterAnnualObjectiveWorkflowInput) {
    return new AnnualObjective.Builder({
      id: new AnnualObjectiveId(),
      year: new Year(input.year),
      objectives: new ObjectiveCollection(
        input.objectives.map((objective) => {
          return new Objective({
            clientId: new TogglClientId(objective.clientId),
            objectiveTime: new HmsTime(...objective.objectiveTime),
          });
        })
      ),
      monthlyAvailableTimes: new MonthlyAvailableTimeCollection(
        input.monthlyAvailableTimes.map((monthlyAvailableTime) => {
          return new MonthlyAvailableTime({
            month: new Month(monthlyAvailableTime.month),
            weekday: new AvailableTime({
              time: new HmsTime(...monthlyAvailableTime.weekday.time),
              weight: new Day(monthlyAvailableTime.weekday.weight),
            }),
            holiday: new AvailableTime({
              time: new HmsTime(...monthlyAvailableTime.holiday.time),
              weight: new Day(monthlyAvailableTime.holiday.weight),
            }),
            offDay: new Day(monthlyAvailableTime.offDay),
          });
        })
      ),
    }).build();
  }
}
