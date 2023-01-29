import { TogglClient } from "./toggl-client";
import { TogglClientId } from "./toggl-client-id";

export abstract class TogglClientRepository {
  abstract findById(id: TogglClientId): Promise<TogglClient | undefined>;
  abstract save(value: TogglClient): Promise<TogglClient>;
}
