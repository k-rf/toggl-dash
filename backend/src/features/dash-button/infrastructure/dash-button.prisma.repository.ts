import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/config/database/prisma.service";

import { DashButton } from "../core/domain/dash-button";
import { DashButtonCollection } from "../core/domain/dash-button-collection";
import { DashButtonId } from "../core/domain/dash-button-id";
import { DashButtonOrder } from "../core/domain/dash-button-order";
import { DashButtonSummary } from "../core/domain/dash-button-summary";
import { Criteria, DashButtonRepository } from "../core/domain/dash-button.repository";

@Injectable()
export class DashButtonPrismaRepository implements DashButtonRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async find(criteria?: Criteria): Promise<DashButtonCollection> {
    const result = await this.prismaService.dashButton.findMany(
      criteria
        ? {
            orderBy: { order: criteria.order },
          }
        : undefined
    );

    return new DashButtonCollection(
      result.map(
        (e) =>
          new DashButton({
            id: new DashButtonId(e.id),
            order: new DashButtonOrder(e.order),
            summary: new DashButtonSummary(e.summary),
          })
      )
    );
  }
}
