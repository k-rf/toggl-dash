import { TogglEntry } from ".";

export abstract class TogglEntryDispatcher {
  abstract start(togglEntry: TogglEntry): Promise<boolean>;
}
