import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, waitFor, within } from "@storybook/testing-library";

import { CreateDashButtonDialog } from "./CreateDashButtonDialog";

export default { component: CreateDashButtonDialog, args: { open: true } } as Meta<
  typeof CreateDashButtonDialog
>;

type Story = StoryObj<typeof CreateDashButtonDialog>;

export const Default: Story = {};

// Play Utils
// -----------------------------------------------------------------------------

// TODO:
// type Context = {};

// function playUtils(play: (context: Context) => Promise<void> | void) {
//   return async ({ canvasElement }: { canvasElement: HTMLElement }) => {};
// }
