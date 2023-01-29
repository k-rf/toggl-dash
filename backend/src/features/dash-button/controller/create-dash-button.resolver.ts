import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { CreateDashButtonInput } from "graphql/graphql";

import {
  CreateDashButtonService,
  CreateDashButtonServiceInput,
} from "../core/service/create-dash-button";

@Resolver()
export class CreateDashButtonResolver {
  constructor(private readonly service: CreateDashButtonService) {}

  @Mutation()
  createDashButton(@Args("data") data: CreateDashButtonInput) {
    return this.service.handle(new CreateDashButtonServiceInput(data));
  }
}
