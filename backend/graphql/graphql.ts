/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class StartEntryInput {
  dashButtonId!: string;
}

export class DashButton {
  id!: string;
  client!: string;
  project!: string;
  description!: string;
  order!: number;
}

export abstract class IQuery {
  abstract dashButtonAll(): DashButton[] | Promise<DashButton[]>;
}

export abstract class IMutation {
  abstract startEntry(
    data?: Nullable<StartEntryInput>
  ): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
