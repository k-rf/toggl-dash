import { Uuid } from "~/shared/v2/uuid";

export class TogglEntryId extends Uuid<"TogglEntryId"> {
  readonly type = "TogglEntryId";
}
