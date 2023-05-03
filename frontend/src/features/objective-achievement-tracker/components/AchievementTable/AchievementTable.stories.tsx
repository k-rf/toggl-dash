import type { Meta, StoryObj } from "@storybook/react";

import { monthlyObjectiveInfoFixture } from "../fixture";

import { AchievementTable } from "./AchievementTable";

export default { component: AchievementTable } as Meta<typeof AchievementTable>;

type Story = StoryObj<typeof AchievementTable>;

export const Default: Story = {
  args: { data: monthlyObjectiveInfoFixture },
};
