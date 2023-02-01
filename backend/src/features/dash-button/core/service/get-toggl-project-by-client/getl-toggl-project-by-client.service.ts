import { Inject, Injectable } from "@nestjs/common";

import { IQuery } from "~/graphql/graphql";

import { GetTogglProjectByClientServiceOutput } from "./get-toggl-project-by-client.service.output";

/**
 * 指定された Toggl クライアントに紐づく Toggl プロジェクトの一覧を取得する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class GetTogglProjectByClientService {
  constructor(@Inject("QueryService") private readonly queryService: IQuery) {}

  async handle(id: number) {
    const result = await this.queryService.togglProjectByClient(id);

    return new GetTogglProjectByClientServiceOutput(
      result.map((e) => ({
        id: e.id,
        name: e.name,
      }))
    );
  }
}
