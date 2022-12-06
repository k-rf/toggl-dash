import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { ElPaper } from "../Elements";
import { ElTypography } from "../Elements/ElTypography";

import { ExpandMoreIcon } from "./ExpandMoreIcon";
import { PlayArrowIcon } from "./PlayArrowIcon";
import { UnfoldLessIcon } from "./UnfoldLessIcon";
import { UnfoldMoreIcon } from "./UnfoldMoreIcon";
import { VisibilityIcon } from "./VisibilityIcon";
import { VisibilityOffIcon } from "./VisibilityOffIcon";

export default {
  component: Icons,
} as Meta;

export const Default: StoryObj = {};

function Icons() {
  return (
    <Box display="flex" flexWrap="wrap">
      {[
        { title: "Visibility", icon: <VisibilityIcon /> },
        { title: "VisibilityOff", icon: <VisibilityOffIcon /> },
        { title: "PlayArrow", icon: <PlayArrowIcon /> },
        { title: "ExpandMore", icon: <ExpandMoreIcon /> },
        { title: "UnfoldLess", icon: <UnfoldLessIcon /> },
        { title: "UnfoldMore", icon: <UnfoldMoreIcon /> },
        // NOTE: プロダクトで利用するアイコンが増えたらここに追記する
      ].map(({ title, icon }) => (
        <SxPaper key={title} title={title}>
          {icon}
        </SxPaper>
      ))}
    </Box>
  );
}

const SxPaper = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <ElPaper
      sx={{
        display: "flex",
        width: 96,
        justifyContent: "center",
        alignItems: "center",
        p: (theme) => theme.spacing(1),
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
