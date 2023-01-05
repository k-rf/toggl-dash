import { Injectable } from "@nestjs/common";

import { IQuery } from "graphql/graphql";
import { PrismaService } from "~/config/database/prisma.service";
import { TogglService } from "~/config/toggl/toggl.service";

@Injectable()
export class QueryService implements IQuery {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly togglService: TogglService
  ) {}

  async dashButtonAll() {
    const result = await this.prismaService.dashButton.findMany({
      orderBy: { order: "asc" },
      include: { togglEntry: { include: { client: true, project: true } } },
    });

    return result.map((e) => ({
      id: e.id,
      order: e.order,
      client: e.togglEntry.client.name,
      project: e.togglEntry.project.name,
      description: e.togglEntry.description,
    }));
  }

  togglClientAll() {
    return this.togglService.findAllClient();
  }
}
