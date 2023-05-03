import { VisibilityOff } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const VisibilityOffIcon = (props: Props) => {
  return <VisibilityOff {...props} />;
};
