import { Module } from "@nestjs/common";

import { TogglClientResolver } from "./controller/get-all-toggl-client.resolver";
import { DashButtonResolver } from "./controller/retrieve-dash-button.resolver";
import { StartEntryResolver } from "./controller/start-entry.resolver";
import { TogglProjectResolver } from "./controller/toggl-project.resolver";
import { DashButtonRepository } from "./core/domain/dash-button/dash-button.repository";
import { TogglEntryDispatcher } from "./core/domain/toggl-entry/toggl-entry.dispatcher";
import { GetAllTogglClientService } from "./core/service/get-all-toggl-client/get-all-toggl-client.service";
import { GetTogglProjectByClientService } from "./core/service/get-toggl-project-by-client/getl-toggl-project-by-client.service";
import { RetrieveDashButtonService } from "./core/service/retrieve-dash-button/retrieve-dash-button.service";
import { StartEntryService } from "./core/service/start-entry/start-entry.service";
import { DashButtonPrismaRepository } from "./infrastructure/prisma/dash-button.prisma.repository";
import { QueryService } from "./infrastructure/query-service";
import { TogglEntryTogglDispatcher } from "./infrastructure/toggl/toggl-entry.toggl.dispatcher";

@Module({
  providers: [
    DashButtonResolver,
    RetrieveDashButtonService,
    TogglClientResolver,
    GetAllTogglClientService,
    TogglProjectResolver,
    GetTogglProjectByClientService,
    StartEntryResolver,
    StartEntryService,
    { provide: "QueryService", useClass: QueryService },
    { provide: DashButtonRepository, useClass: DashButtonPrismaRepository },
    { provide: TogglEntryDispatcher, useClass: TogglEntryTogglDispatcher },
  ],
})
export class DashButtonModule {}
