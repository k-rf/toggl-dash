import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

type Props = Prettify<
  Pick<
    IconButtonProps,
    | "children"
    | "color"
    | "disabled"
    | "disableTouchRipple"
    | "onClick"
    | "onMouseDown"
    | "onMouseLeave"
    | "onMouseUp"
    | "size"
    | "sx"
  >
>;

export const ElIconButton: FC<Props> = (props) => {
  return <IconButton {...props} />;
};

export type { Props as ElIconButtonProps };
