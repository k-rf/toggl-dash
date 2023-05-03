import { Args, Mutation, Resolver } from "@nestjs/graphql";

import {
  RegisterAnnualObjectiveWorkflow,
  RegisterAnnualObjectiveWorkflowInput,
} from "../core/service";

@Resolver()
export class RegisterAnnualObjectiveResolver {
  constructor(private readonly workflow: RegisterAnnualObjectiveWorkflow) {}

  @Mutation()
  async registerAnnualObjective(@Args("data") data: RegisterAnnualObjectiveWorkflowInput) {
    await this.workflow.handle(new RegisterAnnualObjectiveWorkflowInput(data));
    return true;
  }
}
