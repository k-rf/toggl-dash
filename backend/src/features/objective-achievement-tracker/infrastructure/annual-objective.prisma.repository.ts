import { Injectable, Logger } from "@nestjs/common";
import { v4 as uuidV4 } from "uuid";

import { PrismaService } from "~/config/database/prisma.service";
import { Ok } from "~/util/result";

import { AnnualObjectiveId, AnnualObjective } from "../core/domain/annual-objective";
import { AnnualObjectiveRepository } from "../core/domain/annual-objective/annual-objective.repository";

@Injectable()
export class AnnualObjectivePrismaRepository implements AnnualObjectiveRepository {
  private readonly logger = new Logger(AnnualObjectivePrismaRepository.name);

  constructor(private readonly prismaService: PrismaService) {}

  async findById(_id: AnnualObjectiveId): Promise<Result<AnnualObjective, undefined>> {
    throw new Error("Not implemented");
  }

  async save(value: AnnualObjective): Promise<Result<AnnualObjective, undefined>> {
    await this.prismaService.$transaction([
      this.prismaService.annualObjective.create({
        include: {
          objective: true,
        },
        data: {
          id: value.id.toPrimitive(),
          year: value.year.toPrimitive(),
          objective: {
            createMany: {
              data: value.objectives.toPrimitive().map((e) => {
                const [hour, minute, second] = e.objectiveTime;
                return { id: uuidV4(), clientId: e.clientId, hour, minute, second };
              }),
            },
          },
        },
      }),
      ...value.monthlyAvailableTimes
        .toPrimitive()
        .map((e) => {
          const monthlyAvailableTimeId = uuidV4();

          return [
            this.prismaService.monthlyAvailableTime.create({
              data: {
                id: monthlyAvailableTimeId,
                month: e.month,
                annualObjectiveId: value.id.toPrimitive(),
                off: e.offDay,
              },
            }),
            this.prismaService.availableTime.create({
              data: {
                id: uuidV4(),
                monthlyAvailableTimeId,
                kind: "weekday",
                weight: e.weekday.weight,
                ...this.toHms(e.weekday.time),
              },
            }),
            this.prismaService.availableTime.create({
              data: {
                id: uuidV4(),
                monthlyAvailableTimeId,
                kind: "holiday",
                weight: e.holiday.weight,
                ...this.toHms(e.holiday.time),
              },
            }),
          ];
        })
        .flat(),
    ]);

    return Ok(value);
  }

  private toHms = (value: readonly [number, number, number]) => {
    const [hour, minute, second] = value;
    return { hour, minute, second };
  };
}
