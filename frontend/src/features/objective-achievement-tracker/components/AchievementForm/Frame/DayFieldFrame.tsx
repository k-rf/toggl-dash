import { Box } from "@mui/material";

import { ElTypography } from "~/components/Elements/ElTypography";

import { FieldFrameProps } from "./types";

export const DayFieldFrame = (props: {
  children: (commonProps: FieldFrameProps) => React.ReactNode;
}) => {
  return (
    <Box display="flex" alignItems="center" gap={(theme) => theme.spacing(0, 1)}>
      {props.children({
        type: "number",
        min: 0,
        max: 31,
        size: "small",
        sx: {
          "input::-webkit-outer-spin-button": { WebkitAppearance: "none" },
          "input::-webkit-inner-spin-button": { WebkitAppearance: "none" },
          width: 48,
        },
      })}
      <ElTypography>日</ElTypography>
    </Box>
  );
};
