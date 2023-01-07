import { DialogActions, DialogActionsProps } from "@mui/material";

type Props = Pick<DialogActionsProps, "children" | "sx">;

export const ElDialogActions = (props: Props) => {
  return <DialogActions {...props} />;
};
