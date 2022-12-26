/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface StartEntryInput {
  description: string;
}

export interface DashButton {
  id: string;
  summary: string;
  order: number;
}

export interface IQuery {
  dashButtonAll(): DashButton[] | Promise<DashButton[]>;
}

export interface IMutation {
  startEntry(data?: Nullable<StartEntryInput>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
