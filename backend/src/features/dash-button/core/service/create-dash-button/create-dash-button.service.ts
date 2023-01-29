import { Injectable } from "@nestjs/common";

import { DashButton, DashButtonId, DashButtonOrder } from "../../domain/dash-button";
import { DashButtonRepository } from "../../domain/dash-button/dash-button.repository";
import { TogglClient, TogglClientId, TogglClientName } from "../../domain/toggl-client";
import { TogglClientRepository } from "../../domain/toggl-client/toggl-client.repository";
import { TogglEntry, TogglEntryDescription, TogglEntryId } from "../../domain/toggl-entry";
import { TogglEntryRepository } from "../../domain/toggl-entry/toggl-entry.repository";
import { TogglProjectId, TogglProjectName } from "../../domain/toggl-project";
import { TogglProject } from "../../domain/toggl-project/toggl-project";
import { TogglProjectRepository } from "../../domain/toggl-project/toggl-project.repository";

import { CreateDashButtonServiceInput } from "./create-dash-button.service.input";

/**
 * DashButton を作成する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class CreateDashButtonService {
  constructor(
    private readonly dashButtonRepository: DashButtonRepository,
    private readonly togglEntryRepository: TogglEntryRepository,
    private readonly togglClientRepository: TogglClientRepository,
    private readonly togglProjectRepository: TogglProjectRepository
  ) {}

  async handle(input: CreateDashButtonServiceInput) {
    const { entry, client, project, dashButton } = this.mapToDomainModel(input);

    await this.saveClient(client);
    await this.saveProject(project);
    await this.togglEntryRepository.save(entry);
    await this.dashButtonRepository.save(dashButton);
  }

  private mapToDomainModel(input: CreateDashButtonServiceInput) {
    const entry = new TogglEntry({
      id: new TogglEntryId(),
      clientId: new TogglClientId(input.value.clientId),
      projectId: new TogglProjectId(input.value.projectId),
      description: new TogglEntryDescription(input.value.description),
    });

    const client = new TogglClient({
      id: new TogglClientId(input.value.clientId),
      name: new TogglClientName(input.value.client),
    });

    const project = new TogglProject({
      id: new TogglProjectId(input.value.projectId),
      name: new TogglProjectName(input.value.project),
    });

    const dashButton = new DashButton({
      id: new DashButtonId(),
      order: new DashButtonOrder(input.value.order),
      togglEntry: entry,
    });

    return { entry, client, project, dashButton };
  }

  private async saveClient(value: TogglClient) {
    if (await this.togglClientRepository.findById(value.id)) return;

    await this.togglClientRepository.save(value);
  }

  private async saveProject(value: TogglProject) {
    if (await this.togglProjectRepository.findById(value.id)) return;

    await this.togglProjectRepository.save(value);
  }
}
