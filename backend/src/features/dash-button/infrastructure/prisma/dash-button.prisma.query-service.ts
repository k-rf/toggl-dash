import { Injectable } from "@nestjs/common";

import { IQuery } from "graphql/graphql";
import { PrismaService } from "~/config/database/prisma.service";

@Injectable()
export class DashButtonPrismaQueryService implements IQuery {
  constructor(private readonly prismaService: PrismaService) {}

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
}
