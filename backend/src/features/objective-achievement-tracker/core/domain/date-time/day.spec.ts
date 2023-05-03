import { Day } from "./day";

describe("日を扱う Day クラス", () => {
  describe("constructor", () => {
    it.each([0, 1, 31, 32])("Accepted: %s", (a) => {
      expect(new Day(a).value).toStrictEqual(a);
    });

    it.each([-1, 1.1])("Rejected: %s", (a) => {
      expect(() => new Day(a)).toThrow();
    });
  });
});
