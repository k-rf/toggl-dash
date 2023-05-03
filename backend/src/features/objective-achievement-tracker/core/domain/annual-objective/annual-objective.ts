import { Entity } from "~/shared/v2/entity";

import { AchievementId } from "../achievement";
import { Year } from "../date-time";

import { AnnualObjectiveId } from "./annual-objective-id";
import { MonthlyAvailableTimeCollection } from "./monthly-available-time.collection";
import { ObjectiveCollection } from "./objective.collection";

/**
 * 年次目標
 * -----------------------------------------------------------------------------
 */
export class AnnualObjective extends Entity<"AnnualObjective"> {
  readonly type = "AnnualObjective";

  readonly id: AnnualObjectiveId;
  readonly year: Year;
  readonly objectives: ObjectiveCollection;
  readonly achievementId?: AchievementId;
  readonly monthlyAvailableTimes: MonthlyAvailableTimeCollection;
  // readonly monthlyBorders: MonthlyBorderList // TODO 値で持つのではなく算出する系かも

  private constructor(props: Property<AnnualObjective>) {
    super();

    this.id = props.id;
    this.year = props.year;
    this.objectives = props.objectives;
    this.monthlyAvailableTimes = props.monthlyAvailableTimes;
  }

  static Builder = class Builder {
    #product: AnnualObjective;

    constructor(props: Property<AnnualObjective>) {
      this.#product = new AnnualObjective(props);
    }

    withAchievement(value: AchievementId) {
      this.#product = new AnnualObjective({ ...this.#product, achievementId: value });

      return this;
    }

    build() {
      return this.#product;
    }
  };

  toPrimitive() {
    return {
      id: this.id.toPrimitive(),
      year: this.year.toPrimitive(),
      objectives: this.objectives.toPrimitive(),
      monthlyAvailableTimes: this.monthlyAvailableTimes.toPrimitive(),
      achievementId: this.achievementId?.toPrimitive(),
    } as const satisfies Record<keyof Property<AnnualObjective>, unknown>;
  }
}
