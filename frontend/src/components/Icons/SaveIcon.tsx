import { Save } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const SaveIcon = (props: Props) => {
  return <Save {...props} />;
};
