import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { ElPaper } from "../Elements";
import { ElTypography } from "../Elements/ElTypography";

import * as Icons from ".";

export default {
  component: Catalog,
} as Meta;

export const Default: StoryObj = {};

function Catalog() {
  return (
    <Box display="flex" flexWrap="wrap">
      {Object.entries(Icons)
        .map(([filename, Component]) => ({
          title: filename.replace("Icon", ""),
          icon: <Component />,
        }))
        .map(({ title, icon }) => (
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
