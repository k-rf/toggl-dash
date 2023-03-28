import { getStoryComponentLayer } from "./get-story-component-layer";

describe("getStoryComponentLayer", () => {
  describe("ディレクトリ階層の先頭を大文字にする", () => {
    describe.each([
      { title: '"." から始まるとき、"." を除去して出力する', start: "./" },
      { title: '"./src" から始まるとき、"./src" を除去して出力する', start: "./src/" },
      { title: '"src" から始まるとき、"src" を除去して出力する', start: "src/" },
      { title: "上記を含まないとき、そのまま出力する", start: "" },
    ])("$title", ({ start }) => {
      it.each([
        [`${start}abc/component.stories.tsx`, "Abc"],
        [`${start}abc/def/component.stories.tsx`, "Abc/Def"],
        [`${start}abc/def/xyz/component.stories.tsx`, "Abc/Def/Xyz"],
      ])("f(%s) => %s", (a, expected) => {
        expect(getStoryComponentLayer(a)).toStrictEqual(expected);
      });
    });
  });
});
