import { Day } from "./day";

describe("日を扱う Day クラス", () => {
  describe("constructor", () => {
    it.each([1, 31])("Accepted: %s", (a) => {
      expect(new Day(a).value).toStrictEqual(a);
    });

    it.each([-1, 0, 1.1, 32])("Rejected: %s", (a) => {
      expect(() => new Day(a)).toThrow();
    });
  });
});
