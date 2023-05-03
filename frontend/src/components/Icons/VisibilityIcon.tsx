import { Visibility } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const VisibilityIcon = (props: Props) => {
  return <Visibility {...props} />;
};
