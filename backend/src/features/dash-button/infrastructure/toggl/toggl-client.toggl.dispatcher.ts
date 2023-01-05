import { Injectable } from "@nestjs/common";

import { TogglService } from "~/config/toggl/toggl.service";

import {
  TogglClient,
  TogglClientCollection,
  TogglClientDispatcher,
  TogglClientId,
  TogglClientName,
} from "../../core/domain/toggl-client";

@Injectable()
export class TogglClientTogglDispatcher implements TogglClientDispatcher {
  constructor(private readonly service: TogglService) {}

  async findAll(): Promise<TogglClientCollection> {
    const result = await this.service.findAllClient();

    return new TogglClientCollection(
      result.map(
        (e) =>
          new TogglClient({
            id: new TogglClientId(e.id),
            name: new TogglClientName(e.name),
          })
      )
    );
  }
}
