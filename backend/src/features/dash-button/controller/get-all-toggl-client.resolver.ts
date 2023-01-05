import { Query, Resolver } from "@nestjs/graphql";

import { GetAllTogglClientService } from "../core/service/get-all-toggl-client/get-all-toggl-client.service";

@Resolver("TogglClient")
export class TogglClientResolver {
  constructor(private readonly service: GetAllTogglClientService) {}

  @Query()
  async togglClientAll() {
    return this.service.handle();
  }
}
