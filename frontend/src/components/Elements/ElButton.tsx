import { Button, ButtonProps } from "@mui/material";

type Props = Pick<
  ButtonProps,
  "children" | "variant" | "onClick" | "color" | "fullWidth" | "disabled" | "type" | "form"
>;

export const ElButton = (props: Props) => {
  return <Button variant="contained" {...props} />;
};

export type { Props as ElButtonProps };
