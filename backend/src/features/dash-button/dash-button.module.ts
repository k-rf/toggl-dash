import { Module } from "@nestjs/common";

import { DashButtonResolver } from "./controller/retrieve-dash-button.resolver";
import { DashButtonRepository } from "./core/domain/dash-button.repository";
import { RetrieveDashButtonService } from "./core/service/retrieve-dash-button.service";
import { DashButtonPrismaRepository } from "./infrastructure/dash-button.prisma.repository";

@Module({
  providers: [
    DashButtonResolver,
    RetrieveDashButtonService,
    { provide: DashButtonRepository, useClass: DashButtonPrismaRepository },
  ],
})
export class DashButtonModule {}
