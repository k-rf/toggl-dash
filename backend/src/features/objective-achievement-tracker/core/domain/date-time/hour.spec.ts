import { Hour } from "./hour";

describe("時を扱う Hour クラス", () => {
  describe("0 以上の整数を持つ値を生成する", () => {
    it.each([0, 25])("Accepted: %s", (a) => {
      expect(new Hour(a).value).toStrictEqual(a);
    });

    it.each([-1, 1.1])("Rejected: %s", (a) => {
      expect(() => new Hour(a)).toThrow();
    });
  });
});
