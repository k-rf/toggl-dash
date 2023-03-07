import { Module } from "@nestjs/common";

import { RegisterAnnualObjectiveResolver } from "./controller/register-annual-objective.resolver";
import { AnnualObjectiveRepository } from "./core/domain/annual-objective/annual-objective.repository";
import { RegisterAnnualObjectiveWorkflow } from "./core/service";
import { AnnualObjectiveInMemoryRepository } from "./infrastructure/annual-objective.in-memory.repository";

@Module({
  providers: [
    RegisterAnnualObjectiveResolver,
    RegisterAnnualObjectiveWorkflow,
    { provide: AnnualObjectiveRepository, useClass: AnnualObjectiveInMemoryRepository },
  ],
})
export class ObjectiveAchievementTrackerModule {}
