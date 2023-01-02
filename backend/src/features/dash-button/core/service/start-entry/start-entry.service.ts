import { Injectable } from "@nestjs/common";

import { DashButtonId } from "../../domain/dash-button";
import { DashButtonRepository } from "../../domain/dash-button/dash-button.repository";
import { TogglEntryDispatcher } from "../../domain/toggl-entry/toggl-entry.dispatcher";

import { StartEntryServiceInput } from "./start-entry.service.input";

@Injectable()
export class StartEntryService {
  constructor(
    private readonly dispatcher: TogglEntryDispatcher,
    private readonly dashButtonRepository: DashButtonRepository
  ) {}

  async handle(input: StartEntryServiceInput) {
    const dashButtonId = new DashButtonId(input.value.dashButtonId);

    const dashButton = await this.dashButtonRepository.findById(dashButtonId);

    return this.dispatcher.start(dashButton.togglEntry);
  }
}
