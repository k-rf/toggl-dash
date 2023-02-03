import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";

export default {
  component: ContextMenu,
  args: { open: true, anchorPosition: { left: 32, top: 32 } },
} as Meta<typeof ContextMenu>;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {};
