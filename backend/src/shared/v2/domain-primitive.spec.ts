import { DomainPrimitive } from "./domain-primitive";

describe("DomainPrimitive を扱う抽象クラス", () => {
  describe("等価判定をする eq メソッド", () => {
    it.each([
      [
        { name: "John Doe", item: ["item1", "item2"] },
        { name: "John Doe", item: ["item1", "item2"] },
        true,
      ],
      [
        { name: "John Doe", item: ["item1", "item2"] },
        { name: "John Doe", item: ["item2", "item1"] },
        false,
      ],
      [
        { name: "John Doe", item: ["item1", "item2"] },
        { name: "Jane Doe", item: ["item1", "item2"] },
        false,
      ],
      [
        { name: "John Doe", item: ["item1", "item2"] },
        { name: "Jane Doe", item: ["item2", "item1"] },
        false,
      ],
    ])("%o eq %o => %s", (a, b, expected) => {
      expect(new TestClass(a).eq(new TestClass(b))).toStrictEqual(expected);
    });
  });
});

class TestClass extends DomainPrimitive<"TestA"> {
  readonly type = "TestA";

  readonly name: string;
  readonly item: string[];

  constructor(value: Property<TestClass>) {
    super();

    this.name = value.name;
    this.item = value.item;
  }
}
