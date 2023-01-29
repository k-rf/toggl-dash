import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";

import { TogglEntry } from "../../core/domain/toggl-entry";
import { TogglEntryRepository } from "../../core/domain/toggl-entry/toggl-entry.repository";

@Injectable()
export class TogglEntryPrismaRepository implements TogglEntryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(value: TogglEntry) {
    await this.prismaService.togglEntry.create({
      data: {
        id: value.id.value,
        description: value.description.value,
        clientId: value.clientId.value,
        projectId: value.projectId.value,
      },
    });

    return value;
  }
}
