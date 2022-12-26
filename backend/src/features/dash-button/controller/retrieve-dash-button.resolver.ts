import { Query, Resolver } from "@nestjs/graphql";

import { RetrieveDashButtonService } from "../core/service/retrieve-dash-button/retrieve-dash-button.service";

@Resolver("DashButton")
export class DashButtonResolver {
  constructor(private readonly service: RetrieveDashButtonService) {}

  @Query()
  async dashButtonAll() {
    return this.service.handle();
  }
}
