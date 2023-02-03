import { ListItemIcon, ListItemIconProps } from "@mui/material";

type Props = Pick<ListItemIconProps, "children">;

export const ElListItemIcon = (props: Props) => {
  return <ListItemIcon {...props} />;
};
