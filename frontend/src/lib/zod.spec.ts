import { z } from "./zod";

describe("Zod Error Map", () => {
  it.each([
    ["number" as const, "min" as const, 5, 4, "5以上の数値を入力してください"],
    ["number" as const, "max" as const, 5, 6, "5以下の数値を入力してください"],
    ["string" as const, "min" as const, 1, "", "必須項目です"],
    ["string" as const, "min" as const, 5, `${"x".repeat(4)}`, "5文字以上で入力してください"],
    ["string" as const, "max" as const, 5, `${"x".repeat(6)}`, "5文字以下で入力してください"],
  ])("Big or Small: z.%s().%s(%d).parse(%s)", (type, method, a, b, expected) => {
    expect(() => {
      try {
        z[type]()[method](a).parse(b);
      } catch (e) {
        if (e instanceof z.ZodError) {
          throw e.issues.at(0)?.message;
        }

        throw e;
      }
    }).toThrow(expected);
  });

  it.each([["abc", "メールアドレスが不正な形式です"]])(
    "Email: z.string().email().parse(%s)",
    (a, expected) => {
      expect(() => {
        try {
          z.string().email().parse(a);
        } catch (e) {
          if (e instanceof z.ZodError) {
            throw e.issues.at(0)?.message;
          }

          throw e;
        }
      }).toThrow(expected);
    }
  );

  it.each([["abc", "入力に不備があります"]])("Default: z.number().parse(%s)", (a, expected) => {
    expect(() => {
      try {
        z.number().parse(a);
      } catch (e) {
        if (e instanceof z.ZodError) {
          throw e.issues.at(0)?.message;
        }

        throw e;
      }
    }).toThrow(expected);
  });
});
