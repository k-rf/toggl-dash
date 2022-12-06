import type { Meta, StoryObj } from "@storybook/react";

import { ElHeader, ElHeaderProps } from "./ElHeader";

export default { component: ElHeader } as Meta<ElHeaderProps>;

type Story = StoryObj<ElHeaderProps>;

export const Default: Story = {
  args: {
    title: "Header",
  },
};
