import { Injectable, Logger } from "@nestjs/common";

import { DashButtonId } from "../../domain/dash-button";
import { DashButtonRepository } from "../../domain/dash-button/dash-button.repository";

import { DeleteDashButtonServiceInput } from "./delete-dash-button.service.input";

/**
 * DashButton を削除する
 * -----------------------------------------------------------------------------
 */
@Injectable()
export class DeleteDashButtonService {
  private readonly logger = new Logger("CreateDashButtonService");

  constructor(private readonly dashButtonRepository: DashButtonRepository) {}

  async handle(input: DeleteDashButtonServiceInput) {
    const id = new DashButtonId(input.value.dashButtonId);

    try {
      await this.dashButtonRepository.delete(id);
      return true;
    } catch (e) {
      this.logger.error(e);
      return false;
    }
  }
}
