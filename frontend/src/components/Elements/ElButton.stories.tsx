import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { ElButton, ElButtonProps } from "./ElButton";

export default { component: ElButton } as Meta<ElButtonProps>;

type Story = StoryObj<ElButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
  },
  render: (args) => {
    return <Buttons {...args} />;
  },
};

export const Colors: Story = {
  render: (args) => (
    <Stack direction="column" spacing={2}>
      <Buttons {...args} color="primary">
        Primary
      </Buttons>
      <Buttons {...args} color="secondary">
        Secondary
      </Buttons>
      <Buttons {...args} color="success">
        Success
      </Buttons>
      <Buttons {...args} color="info">
        Info
      </Buttons>
      <Buttons {...args} color="warning">
        Warning
      </Buttons>
      <Buttons {...args} color="error">
        Error
      </Buttons>
      <Buttons {...args} color="inherit">
        Inherit
      </Buttons>
    </Stack>
  ),
};

const Buttons = (args: ElButtonProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Box width={160}>
        <ElButton {...args} variant="contained" fullWidth />
      </Box>
      <Box width={160}>
        <ElButton {...args} variant="outlined" fullWidth />
      </Box>
      <Box width={160}>
        <ElButton {...args} variant="text" fullWidth />
      </Box>
    </Stack>
  );
};
