import { Module } from "@nestjs/common";

import { RegisterAnnualObjectiveResolver } from "./controller/register-annual-objective.resolver";
import { AnnualObjectiveRepository } from "./core/domain/annual-objective/annual-objective.repository";
import { RegisterAnnualObjectiveWorkflow } from "./core/service";
import { AnnualObjectivePrismaRepository } from "./infrastructure/annual-objective.prisma.repository";

@Module({
  providers: [
    RegisterAnnualObjectiveResolver,
    RegisterAnnualObjectiveWorkflow,
    { provide: AnnualObjectiveRepository, useClass: AnnualObjectivePrismaRepository },
  ],
})
export class ObjectiveAchievementTrackerModule {}
