import { StorybookConfig } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react-vite",
  features: { interactionsDebugger: true },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  viteFinal: (config) => {
    return mergeConfig(config, {});
  },
  docs: { autodocs: true },
};

export default config;
