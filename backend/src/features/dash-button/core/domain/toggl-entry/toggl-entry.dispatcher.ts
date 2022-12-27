import { TogglEntryDescription } from "./toggl-entry-description";

export abstract class TogglEntryDispatcher {
  abstract start(description: TogglEntryDescription): Promise<boolean>;
}
