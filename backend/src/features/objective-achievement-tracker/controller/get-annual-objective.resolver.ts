import { Query, Resolver } from "@nestjs/graphql";

import { GetAnnualObjectiveOutput } from "../core/service/get-annual-objective.output";
import { GetAnnualObjectiveWorkflow } from "../core/service/get-annual-objective.workflow";

@Resolver("AnnualObjective")
export class GetAnnualObjectiveResolver {
  constructor(private readonly workflow: GetAnnualObjectiveWorkflow) {}

  @Query()
  async annualObjectiveAll(): Promise<GetAnnualObjectiveOutput> {
    return this.workflow.handle();
  }
}
