import type { Meta, StoryObj } from "@storybook/react";

import { ElTypography, ElTypographyProps } from "./ElTypography";

export default { component: ElTypography } as Meta<ElTypographyProps>;

type Story = StoryObj<ElTypographyProps>;

export const Default: Story = {
  args: {
    children: "Typography",
  },
};
