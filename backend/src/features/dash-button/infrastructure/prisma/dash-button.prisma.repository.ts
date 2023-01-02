import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";
import { InfrastructureError } from "~/error/infrastructure.error";

import { DashButton, DashButtonId, DashButtonOrder } from "../../core/domain/dash-button";
import { DashButtonRepository } from "../../core/domain/dash-button/dash-button.repository";
import {
  TogglEntryProject,
  TogglEntryClient,
  TogglEntry,
  TogglEntryDescription,
  TogglEntryId,
  TogglEntryClientId,
  TogglEntryProjectId,
} from "../../core/domain/toggl-entry";

@Injectable()
export class DashButtonPrismaRepository implements DashButtonRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: DashButtonId): Promise<DashButton> {
    const result = await this.prismaService.dashButton.findUnique({
      where: { id: id.value },
      include: { togglEntry: true },
    });

    if (!result) {
      throw new InfrastructureError("ダッシュボタンが見つかりませんでした");
    }

    return new DashButton({
      id: new DashButtonId(result.id),
      order: new DashButtonOrder(result.order),
      togglEntry: new TogglEntry({
        id: new TogglEntryId(result.togglEntry.id),
        client: new TogglEntryClient(result.togglEntry.client),
        clientId: new TogglEntryClientId(result.togglEntry.clientId),
        project: new TogglEntryProject(result.togglEntry.project),
        projectId: new TogglEntryProjectId(result.togglEntry.projectId),
        description: new TogglEntryDescription(result.togglEntry.description),
      }),
    });
  }
}
