/// <reference types="vite/client"/>

import path from "path";

import { Meta } from "@storybook/react";
import { composeStories } from "@storybook/testing-react";
import type { StoryFn } from "@storybook/testing-react/dist/types";
import React from "react";
import { act, create, ReactTestRenderer } from "react-test-renderer";
import { describe, expect, it } from "vitest";

import { AppProvider } from "./src/provider";
import { getStoryComponentLayer } from "./tools/storybook-test-utils/get-story-component-layer";
import { getStoryFilename } from "./tools/storybook-test-utils/get-story-filename";

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

const storyFiles = Object.values(import.meta.glob<StoryFile>("../**/*.stories.tsx"));

await Promise.all(
  storyFiles.map(async (fn) => {
    const storyFile = await fn();

    describe(`${storyFile.default.title}`, () => {
      Object.values(composeStories(storyFile)).forEach((Story) => {
        it(`${Story.storyName}`, () => {
          let renderer!: ReactTestRenderer;

          act(() => {
            const decorated = () => (
              <AppProvider>
                <Story />
              </AppProvider>
            );

            renderer = create(React.createElement(decorated), {
              createNodeMock: (node) => document.createElement(String(node.type)),
            });
          });

          const pathname = fn.name;
          const dirname = path.parse(pathname).dir;
          const filename = `${path.parse(pathname).name}`;
          const snapshotName = `${filename}.snap`;

          const storyComponent =
            storyFile.default.title ??
            `${getStoryComponentLayer(pathname)}/${getStoryFilename(pathname)}`;

          expect.setState({
            currentTestName: `${storyComponent} > ${Story.storyName}`,
          });
          expect(renderer).toMatchSpecificSnapshot(`${dirname}/__snapshots__/${snapshotName}`);
        });
      });
    });
  })
);
