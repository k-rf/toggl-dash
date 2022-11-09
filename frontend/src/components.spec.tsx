import { Meta } from "@storybook/react";
import { composeStories } from "@storybook/testing-react";
import type { StoryFn } from "@storybook/testing-react/dist/types";
import { act, render } from "@testing-library/react";
import { describe, it } from "vitest";

import { getStoryComponentLayer, getStoryFilename } from "../tools/storybook-test-utils";

import { AppProvider } from "./provider";
import { sleep } from "./utils/sleep";

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

const storyFiles = Object.values(import.meta.glob<StoryFile>("../**/*.stories.tsx"));

await Promise.all(
  storyFiles.map(async (fn) => {
    const storyFile = await fn();

    const pathname = fn.name;
    const storyComponent =
      storyFile.default.title ??
      `${getStoryComponentLayer(pathname)}/${getStoryFilename(pathname)}`;

    describe(`${storyComponent}`, () => {
      Object.values(composeStories(storyFile)).forEach((Story) => {
        it(`${Story.storyName}`, async () => {
          const { container } = render(
            <AppProvider>
              <Story />
            </AppProvider>
          );

          await act(async () => {
            await sleep(20);
          });

          await Story.play({ canvasElement: container });
        });
      });
    });
  })
);
