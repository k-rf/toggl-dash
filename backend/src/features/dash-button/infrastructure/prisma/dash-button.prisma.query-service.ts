import { Injectable } from "@nestjs/common";

import { IQuery } from "graphql/graphql";
import { PrismaService } from "~/config/database/prisma.service";

@Injectable()
export class DashButtonPrismaQueryService implements IQuery {
  constructor(private readonly prismaService: PrismaService) {}

  async dashButtonAll() {
    const result = await this.prismaService.dashButton.findMany({
      orderBy: { order: "asc" },
      include: { togglEntry: true },
    });

    return result.map((e) => ({
      id: e.id,
      order: e.order,
      client: e.togglEntry.client,
      project: e.togglEntry.project,
      description: e.togglEntry.description,
    }));
  }
}
