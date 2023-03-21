import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, waitFor, within } from "@storybook/testing-library";

import { AchievementForm } from "./AchievementForm";

export default { component: AchievementForm } as Meta<typeof AchievementForm>;

type Story = StoryObj<typeof AchievementForm>;

export const Default: Story = {
  args: {},
};
