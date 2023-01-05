import { TogglClientCollection } from "./toggl-client.collection";

export abstract class TogglClientDispatcher {
  abstract findAll(): Promise<TogglClientCollection>;
}
