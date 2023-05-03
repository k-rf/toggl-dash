import { atom } from "jotai";

import { distributeByWeight } from "../utils/distribute-by-weight";

import { annualObjectiveAtom } from "./annual-objective-atom";
import { monthlyObjectiveInfoListAtom } from "./monthly-objective-info-list-atom";

export const annualObjectiveInfoAtom = atom((get) => {
  const monthlyObjectiveInfoList = get(monthlyObjectiveInfoListAtom);
  const annualObjective = get(annualObjectiveAtom);

  return monthlyObjectiveInfoList.map((e, i) => {
    const distributed = distributeByWeight(
      annualObjective,
      monthlyObjectiveInfoList.map((e) => e.availableTime)
    );

    return {
      ...e,
      borderTime: distributed.at(i) ?? 0,
    };
  });
});
