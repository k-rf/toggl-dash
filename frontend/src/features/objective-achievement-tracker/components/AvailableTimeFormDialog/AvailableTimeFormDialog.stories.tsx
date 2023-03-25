import type { Meta, StoryObj } from "@storybook/react";

import { AvailableTimeFormDialog } from "./AvailableTimeFormDialog";

export default {
  component: AvailableTimeFormDialog,
  args: {
    open: true,
    month: 1,
  },
} as Meta<typeof AvailableTimeFormDialog>;

type Story = StoryObj<typeof AvailableTimeFormDialog>;

export const Default: Story = {};
