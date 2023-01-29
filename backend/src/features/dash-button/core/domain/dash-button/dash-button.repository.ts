import { DashButton } from "./dash-button";
import { DashButtonId } from "./dash-button-id";

export abstract class DashButtonRepository {
  abstract findById(id: DashButtonId): Promise<DashButton>;
  abstract save(value: DashButton): Promise<DashButton>;
}
