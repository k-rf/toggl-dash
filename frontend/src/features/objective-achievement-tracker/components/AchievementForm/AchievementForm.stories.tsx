import type { Meta, StoryObj } from "@storybook/react";

import { useAvailableTimeForm } from "../../hooks";
// import { userEvent, waitFor, within } from "@storybook/testing-library";

import { AchievementForm } from "./AchievementForm";

export default {
  component: AchievementForm,
  decorators: [
    (StoryComponent) => {
      const methods = useAvailableTimeForm();

      return <StoryComponent args={{ methods }} />;
    },
  ],
  args: {
    id: "achievement-form",
  },
} as Meta<typeof AchievementForm>;

type Story = StoryObj<typeof AchievementForm>;

export const Default: Story = {};

export const WithDefaultValues: Story = {
  decorators: [
    (StoryComponent) => {
      const methods = useAvailableTimeForm({
        defaultValues: {
          weekday: 22,
          holiday: 8,
          offDay: 1,
          weekdayHour: 4,
          holidayHour: 10,
        },
      });

      return <StoryComponent args={{ methods }} />;
    },
  ],
};
