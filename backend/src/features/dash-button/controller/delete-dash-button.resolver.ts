import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { DeleteDashButtonInput } from "~/graphql/graphql";

import {
  DeleteDashButtonService,
  DeleteDashButtonServiceInput,
} from "../core/service/delete-dash-button";

@Resolver()
export class DeleteDashButtonResolver {
  constructor(private readonly service: DeleteDashButtonService) {}

  @Mutation()
  async deleteDashButton(@Args("data") data: DeleteDashButtonInput) {
    return this.service.handle(new DeleteDashButtonServiceInput(data));
  }
}
