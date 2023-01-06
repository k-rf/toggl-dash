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

export abstract class IQuery {
  abstract dashButtonAll(): DashButton[] | Promise<DashButton[]>;

  abstract togglClientAll(): TogglClient[] | Promise<TogglClient[]>;

  abstract togglProjectByClient(id: number): TogglProject[] | Promise<TogglProject[]>;
}

export abstract class IMutation {
  abstract startEntry(
    data?: Nullable<StartEntryInput>
  ): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
