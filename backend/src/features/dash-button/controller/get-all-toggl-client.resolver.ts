import { Query, Resolver } from "@nestjs/graphql";

import { GetAllTogglClientService } from "../core/service/get-all-toggl-client/get-all-toggl-client.service";
import { GetTogglProjectByClientService } from "../core/service/get-toggl-project-by-client/getl-toggl-project-by-client.service";

@Resolver("TogglClient")
export class TogglClientResolver {
  constructor(
    private readonly clientService: GetAllTogglClientService,
    private readonly projectService: GetTogglProjectByClientService
  ) {}

  @Query()
  async togglClientAll() {
    return this.clientService.handle();
  }

  // NOTE: 429 レスポンスが返ってくるため見送り
  // @ResolveField()
  // async projects(@Parent() client: TogglClient) {
  //   return this.projectService.handle(client.id);
  // }
}
