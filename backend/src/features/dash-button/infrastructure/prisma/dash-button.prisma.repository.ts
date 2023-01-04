import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";
import { InfrastructureError } from "~/error/infrastructure.error";

import { DashButton, DashButtonId, DashButtonOrder } from "../../core/domain/dash-button";
import { DashButtonRepository } from "../../core/domain/dash-button/dash-button.repository";
import { TogglClient, TogglClientId } from "../../core/domain/toggl-client";
import { TogglEntry, TogglEntryDescription, TogglEntryId } from "../../core/domain/toggl-entry";
import { TogglProject, TogglProjectId } from "../../core/domain/toggl-project";

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
        client: new TogglClient(result.togglEntry.client),
        clientId: new TogglClientId(result.togglEntry.clientId),
        project: new TogglProject(result.togglEntry.project),
        projectId: new TogglProjectId(result.togglEntry.projectId),
        description: new TogglEntryDescription(result.togglEntry.description),
      }),
    });
  }
}
