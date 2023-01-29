import { TogglEntry } from "./toggl-entry";

export abstract class TogglEntryRepository {
  abstract save(value: TogglEntry): Promise<TogglEntry>;
}
