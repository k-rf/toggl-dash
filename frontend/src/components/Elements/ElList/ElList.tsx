import { List, ListProps } from "@mui/material";

type Props = Pick<ListProps, "children" | "sx">;

export const ElList = (props: Props) => {
  return <List {...props} />;
};
