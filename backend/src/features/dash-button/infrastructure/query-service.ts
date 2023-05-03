import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";
import { TogglService } from "~/config/toggl/toggl.service";
import { AnnualObjective, IQuery } from "~/graphql/graphql";

type AvailableTime = Record<
  "weekday" | "holiday",
  {
    time: [number, number, number];
    weight: number;
  }
>;

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

  togglProjectByClient(id: number) {
    return this.togglService.findProjectByClient(id);
  }

  async annualObjectiveAll(): Promise<AnnualObjective[]> {
    const result = await this.prismaService.annualObjective.findMany({
      include: {
        monthlyAvailableTime: {
          include: {
            availableTime: true,
          },
          orderBy: { month: "asc" },
        },
        objective: true,
      },
      orderBy: { year: "desc" },
    });

    return result.map<AnnualObjective>((e) => {
      return {
        id: e.id,
        year: e.year,
        objectives: e.objective.map((f) => {
          return {
            clientId: f.clientId,
            objectiveTime: [f.hour, f.minute, f.second],
          };
        }),
        monthlyAvailableTimes: e.monthlyAvailableTime.map((f) => {
          return {
            month: f.month,
            ...f.availableTime.reduce((p, c) => {
              return {
                ...p,
                [c.kind]: {
                  time: [c.hour, c.minute, c.second],
                  weight: c.weight,
                },
              } as AvailableTime;
            }, {} as AvailableTime),
            offDay: f.off,
          };
        }),
      };
    });
  }
}
