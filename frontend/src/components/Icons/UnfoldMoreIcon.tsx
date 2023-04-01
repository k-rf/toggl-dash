import { UnfoldMore } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const UnfoldMoreIcon = (props: Props) => {
  return <UnfoldMore {...props} />;
};
