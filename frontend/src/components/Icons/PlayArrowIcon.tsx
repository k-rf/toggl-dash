import { PlayArrow } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const PlayArrowIcon = (props: Props) => {
  return <PlayArrow {...props} />;
};
