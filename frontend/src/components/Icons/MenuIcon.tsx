import { Menu } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const MenuIcon = (props: Props) => {
  return <Menu {...props} />;
};
