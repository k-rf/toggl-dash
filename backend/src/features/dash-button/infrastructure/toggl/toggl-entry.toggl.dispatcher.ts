import { Injectable } from "@nestjs/common";

import { TogglService } from "~/config/toggl/toggl.service";
import { axios } from "~/lib/axios";

import { TogglEntryDescription } from "../../core/domain/toggl-entry";
import { TogglEntryDispatcher } from "../../core/domain/toggl-entry/toggl-entry.dispatcher";

@Injectable()
export class TogglEntryTogglDispatcher implements TogglEntryDispatcher {
  constructor(private readonly service: TogglService) {}

  /**
   * Toggle Entry を開始する
   *
   * 処理が成功したら `true` を返す。
   * 失敗したらそのまま例外を投げる。
   */
  async start(_description: TogglEntryDescription) {
    // TODO: タイマーを開始する処理を実装する
    await axios.get("", {
      auth: {
        password: "api_token",
        username: this.service.apiToken,
      },
    });

    return true;
  }
}
