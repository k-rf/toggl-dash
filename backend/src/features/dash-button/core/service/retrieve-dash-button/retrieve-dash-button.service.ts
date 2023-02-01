import { Inject, Injectable } from "@nestjs/common";

import { IQuery } from "~/graphql/graphql";
import { ApplicationService } from "~/shared/v1/application-service/application-service";

import { RetrieveDashButtonOutput } from "./retrieve-dash-button.output";

/**
 * ダッシュボタンの一覧を取得する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class RetrieveDashButtonService extends ApplicationService {
  // NOTE: 依存関係が解決できなかったため、明示的に `@Inject` している
  constructor(@Inject("QueryService") private readonly queryService: IQuery) {
    super();
  }

  async handle() {
    const dashButtons = await this.queryService.dashButtonAll();

    return new RetrieveDashButtonOutput(dashButtons);
  }
}
