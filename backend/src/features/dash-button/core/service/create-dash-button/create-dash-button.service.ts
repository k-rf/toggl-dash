import { Injectable } from "@nestjs/common";

import { DashButtonRepository } from "../../domain/dash-button/dash-button.repository";
// import { TogglClientId } from "../../domain/toggl-client";
// import { TogglEntry, TogglEntryDescription, TogglEntryId } from "../../domain/toggl-entry";
// import { TogglProjectId } from "../../domain/toggl-project";

import { CreateDashButtonServiceInput } from "./create-dash-button.service.input";

/**
 * DashButton を作成する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class CreateDashButtonService {
  constructor(private readonly dashButtonRepository: DashButtonRepository) {}

  async handle(_input: CreateDashButtonServiceInput) {
    // TODO
    // const entryId = new TogglEntryId();
    // const entry = new TogglEntry({
    //   id: entryId,
    //   clientId: new TogglClientId(input.value.clientId),
    //   projectId: new TogglProjectId(input.value.projectId),
    //   description: new TogglEntryDescription(input.value.description),
    // });
  }
}
