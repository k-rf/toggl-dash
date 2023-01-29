import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";

import { TogglClient, TogglClientId, TogglClientName } from "../../core/domain/toggl-client";
import { TogglClientRepository } from "../../core/domain/toggl-client/toggl-client.repository";

@Injectable()
export class TogglClientPrismaRepository implements TogglClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: TogglClientId): Promise<TogglClient | undefined> {
    const result = await this.prismaService.togglClient.findUnique({
      where: { id: id.value },
    });

    if (!result) return undefined;

    return new TogglClient({
      id: new TogglClientId(result.id),
      name: new TogglClientName(result.name),
    });
  }

  async save(value: TogglClient) {
    await this.prismaService.togglClient.create({
      data: {
        id: value.id.value,
        name: value.name.value,
      },
    });

    return value;
  }
}
