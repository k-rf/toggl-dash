import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { StartEntryInput } from "~/graphql/graphql";

import { StartEntryService } from "../core/service/start-entry/start-entry.service";
import { StartEntryServiceInput } from "../core/service/start-entry/start-entry.service.input";

@Resolver()
export class StartEntryResolver {
  constructor(private readonly service: StartEntryService) {}

  @Mutation()
  startEntry(@Args("data") data: StartEntryInput) {
    return this.service.handle(new StartEntryServiceInput({ dashButtonId: data.dashButtonId }));
  }
}
