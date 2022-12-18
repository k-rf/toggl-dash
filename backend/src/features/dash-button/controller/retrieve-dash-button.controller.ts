import { Controller, Get } from "@nestjs/common";

import { RetrieveDashButtonService } from "../core/service/retrieve-dash-button.service";

@Controller("dash-button")
export class RetrieveDashButtonController {
  constructor(private readonly service: RetrieveDashButtonService) {}

  @Get()
  async handle() {
    return this.service.handle();
  }
}
