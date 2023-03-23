import { Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { ElLink } from "./ElLink";

export default { component: ElLink, args: { children: "Link" } } as Meta<typeof ElLink>;

type Story = StoryObj<typeof ElLink>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => {
    return (
      <Stack direction="column" spacing={2}>
        <ElLink color="primary" {...args}>
          Primary
        </ElLink>
        <ElLink color="secondary" {...args}>
          Secondary
        </ElLink>
        <ElLink color="error" {...args}>
          Error
        </ElLink>
        <ElLink color="inherit" {...args}>
          Inherit
        </ElLink>
      </Stack>
    );
  },
};
