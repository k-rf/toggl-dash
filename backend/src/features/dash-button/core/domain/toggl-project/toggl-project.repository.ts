import { TogglProject } from "./toggl-project";
import { TogglProjectId } from "./toggl-project-id";

export abstract class TogglProjectRepository {
  abstract findById(id: TogglProjectId): Promise<TogglProject | undefined>;
  abstract save(value: TogglProject): Promise<TogglProject>;
}
