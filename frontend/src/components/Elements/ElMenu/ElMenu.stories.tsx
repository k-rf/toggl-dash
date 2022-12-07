import type { Meta, StoryObj } from "@storybook/react";

import { MenuIcon } from "~/components/Icons";

import { ElIconButton } from "../ElIconButton";

import { ElMenu, ElMenuProps } from "./ElMenu";
import { ElMenuItem } from "./ElMenuItem";

export default {
  component: ElMenu,
  args: {
    trigger: (
      <ElIconButton>
        <MenuIcon />
      </ElIconButton>
    ),
    children: (
      <>
        <ElMenuItem>Menu AAA</ElMenuItem>
        <ElMenuItem>Menu BBB</ElMenuItem>
        <ElMenuItem>Menu CCC</ElMenuItem>
      </>
    ),
  },
} as Meta<ElMenuProps>;

type Story = StoryObj<ElMenuProps>;

export const Default: Story = {};
