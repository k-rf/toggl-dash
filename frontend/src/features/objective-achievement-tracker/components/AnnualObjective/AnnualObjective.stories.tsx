import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, waitFor, within } from "@storybook/testing-library";

import { AnnualObjective } from "./AnnualObjective";

export default { component: AnnualObjective } as Meta<typeof AnnualObjective>;

type Story = StoryObj<typeof AnnualObjective>;

export const Default: Story = {
  args: {},
};
