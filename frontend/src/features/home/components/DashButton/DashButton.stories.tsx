import type { Meta, StoryObj } from "@storybook/react";

import { DashButton, DashButtonProps } from "./DashButton";

export default { component: DashButton } as Meta<DashButtonProps>;

type Story = StoryObj<DashButtonProps>;

export const Default: Story = {
  args: {
    summary: "Summary",
    details: "Details",
  },
};

export const Expanded: Story = {
  ...Default,
  args: {
    ...Default.args,
    expanded: true,
  },
};
