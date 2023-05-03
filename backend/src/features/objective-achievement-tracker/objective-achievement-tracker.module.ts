import { Module } from "@nestjs/common";

import { QueryService } from "../dash-button/infrastructure/query-service";

import { GetAnnualObjectiveResolver } from "./controller/get-annual-objective.resolver";
import { RegisterAnnualObjectiveResolver } from "./controller/register-annual-objective.resolver";
import { AnnualObjectiveRepository } from "./core/domain/annual-objective/annual-objective.repository";
import { RegisterAnnualObjectiveWorkflow } from "./core/service";
import { GetAnnualObjectiveWorkflow } from "./core/service/get-annual-objective.workflow";
import { AnnualObjectivePrismaRepository } from "./infrastructure/annual-objective.prisma.repository";

@Module({
  providers: [
    RegisterAnnualObjectiveResolver,
    RegisterAnnualObjectiveWorkflow,
    GetAnnualObjectiveWorkflow,
    GetAnnualObjectiveResolver,
    { provide: "QueryService", useClass: QueryService },
    { provide: AnnualObjectiveRepository, useClass: AnnualObjectivePrismaRepository },
  ],
})
export class ObjectiveAchievementTrackerModule {}
