import { Month } from "./month";

describe("月を扱う Month クラス", () => {
  describe("constructor", () => {
    it.each([1, 12])("Accepted: %s", (a) => {
      expect(new Month(a).value).toStrictEqual(a);
    });

    it.each([-1, 0, 13, 1.1])("Rejected: %s", (a) => {
      expect(() => new Month(a)).toThrow();
    });
  });
});
