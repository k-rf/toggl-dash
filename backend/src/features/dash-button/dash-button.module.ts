import { Module } from "@nestjs/common";

import { DashButtonResolver } from "./controller/retrieve-dash-button.resolver";
import { StartEntryResolver } from "./controller/start-entry.resolver";
import { DashButtonRepository } from "./core/domain/dash-button/dash-button.repository";
import { TogglEntryDispatcher } from "./core/domain/toggl-entry/toggl-entry.dispatcher";
import { RetrieveDashButtonService } from "./core/service/retrieve-dash-button/retrieve-dash-button.service";
import { StartEntryService } from "./core/service/start-entry/start-entry.service";
import { DashButtonPrismaRepository } from "./infrastructure/prisma/dash-button.prisma.repository";
import { TogglEntryTogglDispatcher } from "./infrastructure/toggl/toggl-entry.toggl.dispatcher";

@Module({
  providers: [
    DashButtonResolver,
    StartEntryResolver,
    RetrieveDashButtonService,
    StartEntryService,
    { provide: DashButtonRepository, useClass: DashButtonPrismaRepository },
    { provide: TogglEntryDispatcher, useClass: TogglEntryTogglDispatcher },
  ],
})
export class DashButtonModule {}
