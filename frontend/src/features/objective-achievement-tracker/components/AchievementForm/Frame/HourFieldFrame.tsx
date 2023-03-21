import { Box } from "@mui/material";

import { ElTypography } from "~/components/Elements/ElTypography";

import { FieldFrameProps } from "./types";

export const HourFieldFrame = (props: {
  children: (commonProps: FieldFrameProps) => React.ReactNode;
}) => {
  return (
    <Box display="flex" alignItems="center" gap={(theme) => theme.spacing(0, 1)}>
      {props.children({
        type: "number",
        min: 0,
        max: 24,
        size: "small",
        sx: {
          "input::-webkit-outer-spin-button": { "-webkit-appearance": "none" },
          "input::-webkit-inner-spin-button": { "-webkit-appearance": "none" },
          width: 64,
        },
      })}
      <ElTypography>時間</ElTypography>
    </Box>
  );
};
