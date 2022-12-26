import { DashButtonCollection } from "./dash-button-collection";

export type Criteria = {
  order: "asc" | "desc";
};

export abstract class DashButtonRepository {
  abstract find(criteria?: Criteria): Promise<DashButtonCollection>;
}
