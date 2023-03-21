import { SxProps, Theme } from "@mui/material";

export type FieldFrameProps = {
  type: "number";
  min: 0;
  max?: 24 | 31;
  size: "small";
  sx: SxProps<Theme>;
};
