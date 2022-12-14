import { Uuid } from "./uuid";

export interface Entity<T extends string> {
  readonly type: T;

  readonly id: Uuid<string>;

  equals(that: Entity<T>): boolean;
}
