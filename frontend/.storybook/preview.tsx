import { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";
import { initialize, mswDecorator } from "msw-storybook-addon";

import { handlers } from "../src/mocks";
import { AppProvider } from "../src/provider";

initialize({ onUnhandledRequest: "bypass" });

export const decorators = [
  mswDecorator,
  (Story: PartialStoryFn<ReactRenderer>) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: { handlers },
};
