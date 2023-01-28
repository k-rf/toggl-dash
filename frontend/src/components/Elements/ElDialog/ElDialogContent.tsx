import { DialogContent, DialogContentProps } from "@mui/material";

type Props = Pick<DialogContentProps, "children" | "sx">;

export const ElDialogContent = (props: Props) => {
  return <DialogContent {...props} />;
};
