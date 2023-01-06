import { Args, Query, Resolver } from "@nestjs/graphql";

import { GetTogglProjectByClientService } from "../core/service/get-toggl-project-by-client/getl-toggl-project-by-client.service";

@Resolver("TogglProject")
export class TogglProjectResolver {
  constructor(private readonly service: GetTogglProjectByClientService) {}

  @Query()
  async togglProjectByClient(@Args("id") id: number) {
    return this.service.handle(id);
  }
}
