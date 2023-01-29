import { Module } from "@nestjs/common";

import { CreateDashButtonResolver } from "./controller/create-dash-button.resolver";
import { TogglClientResolver } from "./controller/get-all-toggl-client.resolver";
import { DashButtonResolver } from "./controller/retrieve-dash-button.resolver";
import { StartEntryResolver } from "./controller/start-entry.resolver";
import { TogglProjectResolver } from "./controller/toggl-project.resolver";
import { DashButtonRepository } from "./core/domain/dash-button/dash-button.repository";
import { TogglClientRepository } from "./core/domain/toggl-client/toggl-client.repository";
import { TogglEntryDispatcher } from "./core/domain/toggl-entry/toggl-entry.dispatcher";
import { TogglEntryRepository } from "./core/domain/toggl-entry/toggl-entry.repository";
import { TogglProjectRepository } from "./core/domain/toggl-project/toggl-project.repository";
import { CreateDashButtonService } from "./core/service/create-dash-button";
import { GetAllTogglClientService } from "./core/service/get-all-toggl-client/get-all-toggl-client.service";
import { GetTogglProjectByClientService } from "./core/service/get-toggl-project-by-client/getl-toggl-project-by-client.service";
import { RetrieveDashButtonService } from "./core/service/retrieve-dash-button/retrieve-dash-button.service";
import { StartEntryService } from "./core/service/start-entry/start-entry.service";
import { DashButtonPrismaRepository } from "./infrastructure/prisma/dash-button.prisma.repository";
import { TogglClientPrismaRepository } from "./infrastructure/prisma/toggl-client.prisma.repository";
import { TogglEntryPrismaRepository } from "./infrastructure/prisma/toggl-entry.prisma.repository";
import { TogglProjectPrismaRepository } from "./infrastructure/prisma/toggl-project.prisma.repository";
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
    CreateDashButtonResolver,
    CreateDashButtonService,
    { provide: "QueryService", useClass: QueryService },
    { provide: DashButtonRepository, useClass: DashButtonPrismaRepository },
    { provide: TogglEntryDispatcher, useClass: TogglEntryTogglDispatcher },
    { provide: TogglEntryRepository, useClass: TogglEntryPrismaRepository },
    { provide: TogglClientRepository, useClass: TogglClientPrismaRepository },
    { provide: TogglProjectRepository, useClass: TogglProjectPrismaRepository },
  ],
})
export class DashButtonModule {}
