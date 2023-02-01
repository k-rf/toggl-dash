import { Inject, Injectable } from "@nestjs/common";

import { IQuery } from "~/graphql/graphql";

import { GetAllTogglClientServiceOutput } from "./get-all-toggl-client.service.output";

/**
 * Toggl クライアントの一覧を取得する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class GetAllTogglClientService {
  constructor(@Inject("QueryService") private readonly queryService: IQuery) {}

  async handle() {
    const result = await this.queryService.togglClientAll();

    return new GetAllTogglClientServiceOutput(
      result.map((e) => ({
        id: e.id,
        name: e.name,
      }))
    );
  }
}
