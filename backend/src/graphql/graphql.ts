/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

// @ts-nocheck

export class StartEntryInput {
  dashButtonId: string;
}

export class CreateDashButtonInput {
  clientId: number;
  client: string;
  projectId: number;
  project: string;
  description: string;
  order: number;
}

export class DeleteDashButtonInput {
  dashButtonId: string;
}

export class ObjectiveInput {
  clientId: number;
  objectiveTime: number[];
}

export class AvailableTimeInput {
  time: number[];
  weight: number;
}

export class MonthlyAvailableTimeInput {
  month: number;
  weekday: AvailableTimeInput;
  holiday: AvailableTimeInput;
  offDay: number;
}

export class RegisterAnnualObjectiveInput {
  year: number;
  objectives: ObjectiveInput[];
  monthlyAvailableTimes: MonthlyAvailableTimeInput[];
}

export abstract class IQuery {
  abstract dashButtonAll(): DashButton[] | Promise<DashButton[]>;

  abstract togglClientAll(): TogglClient[] | Promise<TogglClient[]>;

  abstract togglProjectByClient(id: number): TogglProject[] | Promise<TogglProject[]>;

  abstract annualObjectiveAll(): AnnualObjective[] | Promise<AnnualObjective[]>;
}

export abstract class IMutation {
  abstract startEntry(
    data?: Nullable<StartEntryInput>
  ): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract createDashButton(
    data?: Nullable<CreateDashButtonInput>
  ): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract deleteDashButton(
    data?: Nullable<DeleteDashButtonInput>
  ): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract registerAnnualObjective(
    data?: Nullable<RegisterAnnualObjectiveInput>
  ): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class DashButton {
  id: string;
  client: string;
  project: string;
  description: string;
  order: number;
}

export class TogglClient {
  id: number;
  name: string;
}

export class TogglProject {
  id: number;
  name: string;
}

export class AnnualObjective {
  id: string;
  year: number;
  objectives: Objective[];
  monthlyAvailableTimes: MonthlyAvailableTime[];
}

export class Objective {
  clientId: number;
  objectiveTime: number[];
}

export class MonthlyAvailableTime {
  month: number;
  weekday: AvailableTime;
  holiday: AvailableTime;
  offDay: number;
}

export class AvailableTime {
  time: number[];
  weight: number;
}

type Nullable<T> = T | null;
