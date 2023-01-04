import type { Meta, StoryObj } from "@storybook/react";

import { ElList } from "./ElList";
import { ElListItem } from "./ElListItem";

export default { component: ElList } as Meta<typeof ElList>;

type Story = StoryObj<typeof ElList>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ElListItem>List Item A</ElListItem>
        <ElListItem>List Item B</ElListItem>
        <ElListItem>List Item C</ElListItem>
      </>
    ),
  },
};
