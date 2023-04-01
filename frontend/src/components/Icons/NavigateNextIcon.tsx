import { NavigateNext } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const NavigateNextIcon = (props: Props) => {
  return <NavigateNext {...props} />;
};
