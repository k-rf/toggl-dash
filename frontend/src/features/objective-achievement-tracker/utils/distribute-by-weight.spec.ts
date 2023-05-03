import { distributeByWeight } from "./distribute-by-weight";

describe("distributeByWeight", () => {
  it("重みをつけて分配する", () => {
    expect(distributeByWeight(100, [80, 120])).toStrictEqual([40, 60]);
  });

  it("分配する数値は重みの値を超えない", () => {
    expect(distributeByWeight(100, [20, 30])).toStrictEqual([20, 30]);
  });
});
