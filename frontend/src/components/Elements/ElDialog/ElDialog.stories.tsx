import type { Meta, StoryObj } from "@storybook/react";

import { ElDialog } from "./ElDialog";
import { ElDialogActions } from "./ElDialogActions";
import { ElDialogContent } from "./ElDialogContent";
import { ElDialogTitle } from "./ElDialogTitle";

export default { component: ElDialog } as Meta<typeof ElDialog>;

type Story = StoryObj<typeof ElDialog>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <>
        <ElDialogTitle>Dialog Title</ElDialogTitle>
        <ElDialogContent>Dialog Content</ElDialogContent>
        <ElDialogActions>Dialog Actions</ElDialogActions>
      </>
    ),
  },
};
