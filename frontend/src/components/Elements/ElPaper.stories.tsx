import type { Meta, StoryObj } from "@storybook/react";

import { ElPaper, ElPaperProps } from "./ElPaper";

export default { component: ElPaper } as Meta<ElPaperProps>;

type Story = StoryObj<ElPaperProps>;

export const Default: Story = {
  args: {
    children: "Element Paper",
  },
};
