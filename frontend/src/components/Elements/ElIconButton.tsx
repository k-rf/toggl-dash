import { IconButton, IconButtonProps } from "@mui/material";

type Props = Pick<
  IconButtonProps,
  "children" | "onClick" | "onMouseDown" | "onMouseUp" | "onMouseLeave" | "disableTouchRipple"
>;

export const ElIconButton = (props: Props) => {
  return <IconButton {...props} />;
};

export type { Props as ElIconButtonProps };
