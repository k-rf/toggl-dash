import type { Meta, StoryObj } from "@storybook/react";

import { AchievementTable, MonthlyObjectiveInfo } from "./AchievementTable";

export default { component: AchievementTable } as Meta<typeof AchievementTable>;

type Story = StoryObj<typeof AchievementTable>;

const data: MonthlyObjectiveInfo[] = [
  {
    month: 1,
    achievementTime: 100,
    availableTime: 120,
    borderTime: 80,
  },
  {
    month: 2,
    achievementTime: 90,
    availableTime: 110,
    borderTime: 90,
  },
  {
    month: 3,
    achievementTime: 100,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 4,
    achievementTime: 60,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 5,
    achievementTime: 100,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 6,
    achievementTime: 100,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 7,
    achievementTime: 100,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 8,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 9,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 10,
    availableTime: 120,
    borderTime: 70,
  },
  {
    month: 11,
    availableTime: 120,
    borderTime: 130,
  },
  {
    month: 12,
    availableTime: 120,
    borderTime: 70,
  },
];

export const Default: Story = {
  args: { data },
};
