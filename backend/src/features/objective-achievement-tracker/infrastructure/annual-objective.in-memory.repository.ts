import { Err, Ok } from "~/util/result";

import { AnnualObjective, AnnualObjectiveId } from "../core/domain/annual-objective";
import { AnnualObjectiveRepository } from "../core/domain/annual-objective/annual-objective.repository";

export class AnnualObjectiveInMemoryRepository implements AnnualObjectiveRepository {
  constructor(private value: AnnualObjective[] = []) {}

  async findById(id: AnnualObjectiveId): Promise<Result<AnnualObjective, undefined>> {
    const result = this.value.find((e) => e.id.eq(id));

    if (result) return Ok(result);
    else return Err();
  }

  async save(value: AnnualObjective): Promise<Result<AnnualObjective>> {
    this.value = this.value.concat(value);

    return Ok(value);
  }
}
