import { UnfoldLess } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const UnfoldLessIcon = (props: Props) => {
  return <UnfoldLess {...props} />;
};
