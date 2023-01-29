import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";

import { TogglProjectId, TogglProjectName } from "../../core/domain/toggl-project";
import { TogglProject } from "../../core/domain/toggl-project/toggl-project";
import { TogglProjectRepository } from "../../core/domain/toggl-project/toggl-project.repository";

@Injectable()
export class TogglProjectPrismaRepository implements TogglProjectRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: TogglProjectId): Promise<TogglProject | undefined> {
    const result = await this.prismaService.togglProject.findUnique({
      where: { id: id.value },
    });

    if (!result) return undefined;

    return new TogglProject({
      id: new TogglProjectId(result.id),
      name: new TogglProjectName(result.name),
    });
  }

  async save(value: TogglProject): Promise<TogglProject> {
    await this.prismaService.togglProject.create({
      data: {
        id: value.id.value,
        name: value.name.value,
      },
    });

    return value;
  }
}
