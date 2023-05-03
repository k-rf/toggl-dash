import { range } from "~/util/range";

import { Month, HmsTime, Day } from "../date-time";

import { AvailableTime } from "./available-time";
import { MonthlyAvailableTime } from "./monthly-available-time";
import { MonthlyAvailableTimeCollection } from "./monthly-available-time.collection";

describe("MonthlyAvailableTimeCollection", () => {
  describe("要素数が 12 のリストを生成する", () => {
    const monthlyAvailableTimes = (month: number) =>
      new MonthlyAvailableTime({
        month: new Month(month),
        weekday: new AvailableTime({ time: new HmsTime(3, 0, 0), weight: new Day(20) }),
        holiday: new AvailableTime({ time: new HmsTime(3, 0, 0), weight: new Day(20) }),
        offDay: new Day(2),
      });

    const months = range(1, 13).map(monthlyAvailableTimes);

    const empty = [].map(monthlyAvailableTimes);
    const insufficient = range(1, 12).map(monthlyAvailableTimes);
    const exceeds = [...range(1, 13), 12].map(monthlyAvailableTimes);

    it("Accepted", () => {
      expect(new MonthlyAvailableTimeCollection(months)).toBeDefined();
    });

    it.each([
      { title: 0, array: empty },
      { title: 11, array: insufficient },
      { title: 13, array: exceeds },
    ])("Rejected: $title", ({ array }) => {
      expect(() => new MonthlyAvailableTimeCollection(array)).toThrow();
    });
  });
});
