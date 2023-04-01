import { ExpandMore } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const ExpandMoreIcon = (props: Props) => {
  return <ExpandMore {...props} />;
};
