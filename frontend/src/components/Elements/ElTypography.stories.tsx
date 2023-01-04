import { Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { ElTypography } from "./ElTypography";

export default { component: ElTypography } as Meta<typeof ElTypography>;

type Story = StoryObj<typeof ElTypography>;

export const Default: Story = {
  render: () => {
    return (
      <Stack spacing={2}>
        <ElTypography variant="h1">H1</ElTypography>
        <ElTypography variant="h2">H2</ElTypography>
        <ElTypography variant="h3">H3</ElTypography>
        <ElTypography variant="h4">H4</ElTypography>
        <ElTypography variant="h5">H5</ElTypography>
        <ElTypography variant="h6">H6</ElTypography>
        <ElTypography variant="body1">Body1</ElTypography>
        <ElTypography variant="body2">Body2</ElTypography>
        <ElTypography variant="caption">Caption</ElTypography>
        <ElTypography variant="subtitle1">Subtitle1</ElTypography>
        <ElTypography variant="subtitle2">Subtitle2</ElTypography>
        <ElTypography variant="overline">Overline</ElTypography>
      </Stack>
    );
  },
};
