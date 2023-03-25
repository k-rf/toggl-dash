import { atom } from "jotai";
import { match, P } from "ts-pattern";

import { range } from "~/utils/range";

import { MonthlyObjectiveInfo } from "../components/AchievementTable";

import { availableTimeListAtom } from "./available-time-list-atom";

export const monthlyObjectiveInfoListAtom = atom<MonthlyObjectiveInfo[]>((get) => {
  const availableTimes = get(availableTimeListAtom);

  return range(12).map((e) => {
    const common = {
      month: e + 1,
      borderTime: 0,
    };

    return match(availableTimes.at(e))
      .with(P.not(P.nullish), ({ weekday, weekdayHour, holiday, holidayHour }) => {
        return {
          ...common,
          availableTime: weekday * weekdayHour + holiday * holidayHour,
        };
      })
      .otherwise(() => {
        return {
          ...common,
          availableTime: 0,
        };
      });
  });
});
