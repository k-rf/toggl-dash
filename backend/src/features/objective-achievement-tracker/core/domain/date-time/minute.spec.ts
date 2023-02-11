import { Minute } from "./minute";

describe("分を扱う Minute クラス", () => {
  describe("0 以上 59 以下の整数を持つ値を生成する", () => {
    it.each([0, 59])("Accepted: %s", (a) => {
      expect(new Minute(a).value).toStrictEqual(a);
    });

    it.each([-1, 60, 1.1])("Rejected: %s", (a) => {
      expect(() => new Minute(a)).toThrow();
    });
  });
});
