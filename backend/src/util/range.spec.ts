import { range } from "./range";

describe("range", () => {
  describe("開始と終了を指定する", () => {
    it.each([
      { begin: 0, end: 0, expected: [] },
      { begin: 0, end: 1, expected: [0] },
      { begin: 0, end: 5, expected: [0, 1, 2, 3, 4] },
      { begin: 3, end: 5, expected: [3, 4] },
    ])("Accepted: [$begin, $end) -> $expected", ({ begin, end, expected }) => {
      expect(range(begin, end)).toStrictEqual(expected);
    });

    it.each([{ begin: 3, end: 1 }])("Rejected: [$begin, $end)", ({ begin, end }) => {
      expect(() => range(begin, end)).toThrow();
    });
  });

  describe("終了のみ指定する", () => {
    it.each([
      { end: 0, expected: [] },
      { end: 1, expected: [0] },
      { end: 5, expected: [0, 1, 2, 3, 4] },
    ])("Accepted: [0, $end) -> $expected", ({ end, expected }) => {
      expect(range(end)).toStrictEqual(expected);
    });

    it.each([{ end: -1 }])("Rejected: [0, $end)", ({ end }) => {
      expect(() => range(end)).toThrow();
    });
  });
});
