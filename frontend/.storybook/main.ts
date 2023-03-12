import { StorybookConfig } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react-vite",
  features: { interactionsDebugger: true },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ["../public"],
  viteFinal: (config) => {
    return mergeConfig(config, {});
  },
};

export default config;
