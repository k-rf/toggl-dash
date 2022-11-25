import { IconButton, IconButtonProps } from "@mui/material";

type Props = Pick<
  IconButtonProps,
  | "children"
  | "color"
  | "onClick"
  | "onMouseDown"
  | "onMouseUp"
  | "onMouseLeave"
  | "disableTouchRipple"
  | "sx"
>;

export const ElIconButton = (props: Props) => {
  return <IconButton {...props} />;
};

export type { Props as ElIconButtonProps };
