import { atom } from "jotai";

import { range } from "~/utils/range";

import { AvailableTimeFormSchema } from "../hooks";

export const availableTimeListAtom = atom<AvailableTimeFormSchema[]>(
  range(12).map(() => {
    return {
      weekday: 0,
      holiday: 0,
      offDay: 0,
      weekdayHour: 0,
      holidayHour: 0,
    };
  })
);
