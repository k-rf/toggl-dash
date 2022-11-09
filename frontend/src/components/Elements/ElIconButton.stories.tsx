import type { Meta, StoryObj } from "@storybook/react";

import { VisibilityIcon } from "../Icons";

import { ElIconButton, ElIconButtonProps } from "./ElIconButton";

export default { component: ElIconButton } as Meta<ElIconButtonProps>;

type Story = StoryObj<ElIconButtonProps>;

export const Default: Story = {
  args: {
    children: <VisibilityIcon />,
  },
};
