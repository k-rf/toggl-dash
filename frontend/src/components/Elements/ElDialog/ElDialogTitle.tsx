import { DialogTitle, DialogTitleProps } from "@mui/material";

type Props = Pick<DialogTitleProps, "children" | "sx">;

export const ElDialogTitle = (props: Props) => {
  return <DialogTitle {...props} />;
};
