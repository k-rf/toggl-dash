import { Module } from "@nestjs/common";

import { RetrieveDashButtonController } from "./controller/retrieve-dash-button.controller";
import { DashButtonRepository } from "./core/domain/dash-button.repository";
import { RetrieveDashButtonService } from "./core/service/retrieve-dash-button.service";
import { DashButtonPrismaRepository } from "./infrastructure/dash-button.prisma.repository";

@Module({
  controllers: [RetrieveDashButtonController],
  providers: [
    RetrieveDashButtonService,
    { provide: DashButtonRepository, useClass: DashButtonPrismaRepository },
  ],
})
export class DashButtonModule {}
