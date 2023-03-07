import { Args, Mutation, Resolver } from "@nestjs/graphql";

import {
  RegisterAnnualObjectiveWorkflow,
  RegisterAnnualObjectiveWorkflowInput,
} from "../core/service";

@Resolver()
export class RegisterAnnualObjectiveResolver {
  constructor(private readonly workflow: RegisterAnnualObjectiveWorkflow) {}

  @Mutation()
  registerAnnualObjective(@Args("data") data: RegisterAnnualObjectiveWorkflowInput) {
    return this.workflow.handle(new RegisterAnnualObjectiveWorkflowInput(data));
  }
}
