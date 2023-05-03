import { Inject, Injectable, Logger } from "@nestjs/common";

import { IQuery } from "~/graphql/graphql";

import { GetAnnualObjectiveOutput } from "./get-annual-objective.output";

@Injectable()
export class GetAnnualObjectiveWorkflow {
  private readonly logger = new Logger(GetAnnualObjectiveWorkflow.name);

  constructor(@Inject("QueryService") private readonly queryService: IQuery) {}

  async handle() {
    this.logger.log("Start to get annual objective workflow");

    const result = await this.queryService.annualObjectiveAll();
    this.logger.debug(JSON.stringify(result));

    this.logger.log("End to get annual objective workflow");
    return new GetAnnualObjectiveOutput(result);
  }
}
