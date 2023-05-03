import { v4 as uuidV4 } from "uuid";

import { TogglClientId } from "~/features/dash-button/core/domain/toggl-client";

import {
  AnnualObjective,
  AnnualObjectiveId,
  AvailableTime,
  MonthlyAvailableTime,
  MonthlyAvailableTimeCollection,
  Objective,
  ObjectiveCollection,
} from "../domain/annual-objective";
import { Day, HmsTime, Month, Year } from "../domain/date-time";

const id = uuidV4();

const year = 2023;

const monthlyAvailableTimes = [
  {
    month: 1,
    weekday: { time: [3, 0, 0] as const, weight: 25 },
    holiday: { time: [8, 0, 0] as const, weight: 4 },
    offDay: 2,
  },
  {
    month: 2,
    weekday: { time: [3, 0, 0] as const, weight: 22 },
    holiday: { time: [8, 0, 0] as const, weight: 4 },
    offDay: 0,
  },
  {
    month: 3,
    weekday: { time: [3, 0, 0] as const, weight: 25 },
    holiday: { time: [8, 0, 0] as const, weight: 5 },
    offDay: 1,
  },
  {
    month: 4,
    weekday: { time: [3, 0, 0] as const, weight: 22 },
    holiday: { time: [8, 0, 0] as const, weight: 4 },
    offDay: 4,
  },
  {
    month: 5,
    weekday: { time: [3, 0, 0] as const, weight: 21 },
    holiday: { time: [8, 0, 0] as const, weight: 10 },
    offDay: 0,
  },
  {
    month: 6,
    weekday: { time: [3, 0, 0] as const, weight: 24 },
    holiday: { time: [8, 0, 0] as const, weight: 5 },
    offDay: 1,
  },
  {
    month: 7,
    weekday: { time: [3, 0, 0] as const, weight: 27 },
    holiday: { time: [8, 0, 0] as const, weight: 4 },
    offDay: 0,
  },
  {
    month: 8,
    weekday: { time: [3, 0, 0] as const, weight: 21 },
    holiday: { time: [8, 0, 0] as const, weight: 10 },
    offDay: 0,
  },
  {
    month: 9,
    weekday: { time: [3, 0, 0] as const, weight: 24 },
    holiday: { time: [8, 0, 0] as const, weight: 6 },
    offDay: 0,
  },
  {
    month: 10,
    weekday: { time: [3, 0, 0] as const, weight: 24 },
    holiday: { time: [8, 0, 0] as const, weight: 5 },
    offDay: 1,
  },
  {
    month: 11,
    weekday: { time: [3, 0, 0] as const, weight: 26 },
    holiday: { time: [8, 0, 0] as const, weight: 5 },
    offDay: 0,
  },
  {
    month: 12,
    weekday: { time: [3, 0, 0] as const, weight: 23 },
    holiday: { time: [8, 0, 0] as const, weight: 7 },
    offDay: 1,
  },
];

const objectives = [
  {
    clientId: 11111111,
    objectiveTime: [1500, 0, 0] as const,
  },
];

export const annualObjectiveFixture = {
  dataModel: {
    id,
    year,
    monthlyAvailableTimes,
    objectives,
  },
  domainModel: new AnnualObjective.Builder({
    id: new AnnualObjectiveId(id),
    year: new Year(year),
    monthlyAvailableTimes: new MonthlyAvailableTimeCollection(
      monthlyAvailableTimes.map((e) => {
        return new MonthlyAvailableTime({
          month: new Month(e.month),
          weekday: new AvailableTime({
            time: new HmsTime(...e.weekday.time),
            weight: new Day(e.weekday.weight),
          }),
          holiday: new AvailableTime({
            time: new HmsTime(...e.holiday.time),
            weight: new Day(e.holiday.weight),
          }),
          offDay: new Day(e.offDay),
        });
      })
    ),
    objectives: new ObjectiveCollection(
      objectives.map((e) => {
        return new Objective({
          clientId: new TogglClientId(e.clientId),
          objectiveTime: new HmsTime(...e.objectiveTime),
        });
      })
    ),
  }).build(),
};
