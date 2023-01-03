import type { Meta, StoryObj } from "@storybook/react";

import { DashButtonDetailListItem } from "./DashButtonDetailListItem";

export default { component: DashButtonDetailListItem } as Meta<typeof DashButtonDetailListItem>;

type Story = StoryObj<typeof DashButtonDetailListItem>;

export const Default: Story = {
  args: {
    label: "Detail Label",
    content: "Detail Content",
  },
};
