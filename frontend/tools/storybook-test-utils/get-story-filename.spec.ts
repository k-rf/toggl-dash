import { getStoryFilename } from "./get-story-filename";

describe("getStoryFileName", () => {
  describe('"ストーリー系の拡張子を除去したファイル名を取得する"', () => {
    describe.each([
      { title: "ディレクトリ名を含むとき", dirname: "directory/" },
      { title: "ファイル名のみのとき", dirname: "" },
    ])("$title", ({ dirname }) => {
      describe.each([
        { title: "ファイル名にピリオドが含まれないとき", filename: "abc" },
        { title: "ファイル名にピリオドが含まるとき", filename: "abc.xyz" },
      ])("$title", ({ filename }) => {
        it.each([
          [`${dirname}${filename}.stories.tsx`, filename],
          [`${dirname}${filename}.stories.ts`, filename],
          [`${dirname}${filename}.story.tsx`, filename],
          [`${dirname}${filename}.story.ts`, filename],
          [`${dirname}${filename}.stories`, `${filename}.stories`],
          [`${dirname}${filename}.story`, `${filename}.story`],
          [`${dirname}${filename}.ts`, `${filename}.ts`],
          [`${dirname}${filename}`, filename],
        ])('f("%s") => "%s"', (a, expected) => {
          expect(getStoryFilename(a)).toStrictEqual(expected);
        });
      });
    });
  });
});
