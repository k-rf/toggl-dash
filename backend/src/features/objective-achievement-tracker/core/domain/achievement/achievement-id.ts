import { Uuid } from "~/shared/v2/uuid";

export class AchievementId extends Uuid<"AchievementId"> {
  readonly type = "AchievementId";
}
