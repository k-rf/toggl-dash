import { MenuItem, MenuItemProps } from "@mui/material";

type Props = Pick<MenuItemProps, "children" | "onClick">;

export const ElMenuItem = (props: Props) => {
  return <MenuItem {...props} />;
};

export type { Props as ElMenuItemProps };
