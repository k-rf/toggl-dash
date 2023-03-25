import { atom } from "jotai";

import { annualObjectiveInfoAtom } from "./annual-objective-info-atom";

export const totalAnnualObjectiveInfoAtom = atom((get) => {
  const annualObjectiveInfo = get(annualObjectiveInfoAtom);

  return annualObjectiveInfo.reduce(
    (p, c) => {
      return {
        availableTime: p.availableTime + c.availableTime,
        borderTime: p.borderTime + c.borderTime,
        achievementTime: (p.achievementTime ?? 0) + (c.achievementTime ?? 0),
      };
    },
    {
      availableTime: 0,
      borderTime: 0,
      achievementTime: 0,
    }
  );
});
