import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { ElPaper } from "../Elements";
import { ElTypography } from "../Elements/ElTypography";

import { VisibilityIcon } from "./VisibilityIcon";
import { VisibilityOffIcon } from "./VisibilityOffIcon";

export default {
  title: "Components/Icons",
  render: () => {
    return (
      <Box display="flex" flexWrap="wrap">
        <SxPaper title="Visibility">
          <VisibilityIcon />
        </SxPaper>
        <SxPaper title="VisibilityOff">
          <VisibilityOffIcon />
        </SxPaper>
        {/* NOTE: プロダクトで利用するアイコンが増えたらここに追記する */}
      </Box>
    );
  },
} as Meta;

export const Default: StoryObj = {};

const SxPaper = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <ElPaper
      sx={{
        display: "flex",
        width: 96,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        m: (theme) => theme.spacing(0, 2, 2, 0),
      }}
    >
      <Stack>
        <Box display="flex" justifyContent="center">
          {children}
        </Box>
        <ElTypography variant="caption">{title}</ElTypography>
      </Stack>
    </ElPaper>
  );
};
