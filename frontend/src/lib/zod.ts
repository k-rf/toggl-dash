import { match } from "ts-pattern";
import { z as zodDefault } from "zod";

const errorMapper = {
  default: () => ({ message: "入力に不備があります" }),
  email: () => ({ message: "メールアドレスが不正な形式です" }),
  tooSmallString: (minimum: number) => ({
    message: minimum === 1 ? `必須項目です` : `${minimum}文字以上で入力してください`,
  }),
  tooSmallNumber: (minimum: number) => ({ message: `${minimum}以上の数値を入力してください` }),
  tooBigString: (maximum: number) => ({ message: `${maximum}文字以下で入力してください` }),
  tooBigNumber: (maximum: number) => ({ message: `${maximum}以下の数値を入力してください` }),
};

zodDefault.setErrorMap((issue) => {
  return match(issue)
    .with({ code: "too_small" }, (tooSmall) =>
      match(tooSmall)
        .with({ type: "string" }, () => errorMapper.tooSmallString(tooSmall.minimum))
        .with({ type: "number" }, () => errorMapper.tooSmallNumber(tooSmall.minimum))
        .otherwise(() => errorMapper.default())
    )
    .with({ code: "too_big" }, (tooBig) =>
      match(tooBig)
        .with({ type: "string" }, () => errorMapper.tooBigString(tooBig.maximum))
        .with({ type: "number" }, () => errorMapper.tooBigNumber(tooBig.maximum))
        .otherwise(() => errorMapper.default())
    )
    .with({ code: "invalid_string" }, (invalidString) =>
      match(invalidString)
        .with({ validation: "email" }, () => errorMapper.email())
        .otherwise(() => errorMapper.default())
    )
    .otherwise(() => errorMapper.default());
});

export { zodDefault as z };
