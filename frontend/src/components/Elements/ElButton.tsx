import { Button, ButtonProps } from "@mui/material";

type Props = Pick<
  ButtonProps,
  | "children"
  | "color"
  | "disabled"
  | "endIcon"
  | "form"
  | "fullWidth"
  | "onClick"
  | "size"
  | "startIcon"
  | "type"
  | "variant"
>;

export const ElButton = (props: Props) => {
  return <Button variant="contained" {...props} />;
};

export type { Props as ElButtonProps };
