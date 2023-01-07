import type { Meta, StoryObj } from "@storybook/react";

import { ElTextField } from "./ElTextField";

export default { component: ElTextField } as Meta<typeof ElTextField>;

type Story = StoryObj<typeof ElTextField>;

export const Default: Story = {
  args: {
    id: "el-text-field-story-default",
  },
};
