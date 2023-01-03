import { ListItem, ListItemProps } from "@mui/material";

type Props = Pick<ListItemProps, "children" | "sx">;

export const ElListItem = (props: Props) => {
  return <ListItem {...props} />;
};
