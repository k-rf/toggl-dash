import { Global, Module } from "@nestjs/common";

import { TogglService } from "./toggl.service";

@Global()
@Module({
  providers: [TogglService],
  exports: [TogglService],
})
export class TogglModule {}
