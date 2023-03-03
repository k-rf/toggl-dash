import { AnnualObjective } from "./annual-objective";
import { AnnualObjectiveId } from "./annual-objective-id";

export abstract class AnnualObjectiveRepository {
  abstract findById(id: AnnualObjectiveId): Promise<Result<AnnualObjective>>;
  abstract save(value: AnnualObjective): Promise<Result<AnnualObjective>>;
}
