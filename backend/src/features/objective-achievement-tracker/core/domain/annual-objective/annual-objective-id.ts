import { Uuid } from "~/shared/v2/uuid";

export class AnnualObjectiveId extends Uuid<"AnnualObjectiveId"> {
  readonly type = "AnnualObjectiveId";
}
