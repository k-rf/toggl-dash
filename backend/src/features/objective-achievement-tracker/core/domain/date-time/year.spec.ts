import { Year } from "./year";

describe("年を扱う Year クラス", () => {
  describe("constructor", () => {
    it.each([0, 1, 2023])("Accepted: %s", (a) => {
      expect(new Year(a).value).toStrictEqual(a);
    });

    it.each([-1, 1.1])("Rejected: %s", (a) => {
      expect(() => new Year(a)).toThrow();
    });
  });
});
