import { Logger } from "@nestjs/common";

import { Err, Ok } from "~/util/result";

import { AnnualObjective, AnnualObjectiveId } from "../core/domain/annual-objective";
import { AnnualObjectiveRepository } from "../core/domain/annual-objective/annual-objective.repository";

export class AnnualObjectiveInMemoryRepository implements AnnualObjectiveRepository {
  private readonly logger = new Logger(AnnualObjectiveInMemoryRepository.name);

  constructor(private value: AnnualObjective[] = []) {}

  async findById(id: AnnualObjectiveId): Promise<Result<AnnualObjective, undefined>> {
    const result = this.value.find((e) => e.id.eq(id));

    if (result) return Ok(result);
    else return Err();
  }

  async save(value: AnnualObjective): Promise<Result<AnnualObjective>> {
    this.value = this.value.concat(value);

    this.logger.debug(JSON.stringify(value.toPrimitive()));
    this.logger.log("Success to save an entity.");
    return Ok(value);
  }
}
