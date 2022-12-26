import { Injectable } from "@nestjs/common";

import { ApplicationService } from "~/shared/v1/application-service/application-service";

import { DashButtonRepository } from "../../domain/dash-button/dash-button.repository";

import { RetrieveDashButtonOutput } from "./retrieve-dash-button.output";

/**
 * ダッシュボタンの一覧を取得する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class RetrieveDashButtonService extends ApplicationService {
  constructor(private readonly repository: DashButtonRepository) {
    super();
  }

  async handle() {
    const dashButtons = await this.repository.find({ order: "asc" });

    return new RetrieveDashButtonOutput(
      dashButtons.value.map((dashButton) => ({
        id: dashButton.id.value,
        summary: dashButton.summary.value,
        order: dashButton.order.value,
      }))
    );
  }
}
