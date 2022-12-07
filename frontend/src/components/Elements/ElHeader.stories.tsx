import type { Meta, StoryObj } from "@storybook/react";

import { MenuIcon } from "../Icons";

import { ElHeader, ElHeaderProps } from "./ElHeader";
import { ElIconButton } from "./ElIconButton";

export default { component: ElHeader, args: { title: "Header" } } as Meta<ElHeaderProps>;

type Story = StoryObj<ElHeaderProps>;

export const Default: Story = {};

export const WithMenu: Story = {
  args: {
    menu: (
      <ElIconButton color="inherit">
        <MenuIcon />
      </ElIconButton>
    ),
  },
};
