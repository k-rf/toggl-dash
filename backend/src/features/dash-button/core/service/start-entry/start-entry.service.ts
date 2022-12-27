import { Injectable } from "@nestjs/common";

import { TogglEntryDescription } from "../../domain/toggl-entry";
import { TogglEntryDispatcher } from "../../domain/toggl-entry/toggl-entry.dispatcher";

import { StartEntryServiceInput } from "./start-entry.service.input";

@Injectable()
export class StartEntryService {
  constructor(private readonly dispatcher: TogglEntryDispatcher) {}

  handle(input: StartEntryServiceInput) {
    const description = new TogglEntryDescription(input.value.description);

    return this.dispatcher.start(description);
  }
}
