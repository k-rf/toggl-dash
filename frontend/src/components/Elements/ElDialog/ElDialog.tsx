import { Dialog, DialogProps } from "@mui/material";

type Props = Pick<DialogProps, "children" | "onClose" | "open" | "disableEscapeKeyDown" | "sx">;

export const ElDialog = (props: Props) => {
  return <Dialog {...props} />;
};

export type { Props as ElDialogProps };
