import { ListItemText, ListItemTextProps } from "@mui/material";

type Props = Pick<ListItemTextProps, "children">;

export const ElListItemText = (props: Props) => {
  return <ListItemText {...props} />;
};
