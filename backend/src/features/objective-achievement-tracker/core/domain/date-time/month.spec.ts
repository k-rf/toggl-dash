import { Month } from "./month";

describe("月を扱う Month クラス", () => {
  describe("constructor", () => {
    it.each([0, 1, 12, 13])("Accepted: %s", (a) => {
      expect(new Month(a).value).toStrictEqual(a);
    });

    it.each([-1, 1.1])("Rejected: %s", (a) => {
      expect(() => new Month(a)).toThrow();
    });
  });
});
