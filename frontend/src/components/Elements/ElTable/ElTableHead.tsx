import { TableHead, TableHeadProps } from "@mui/material";

type Props = Pick<TableHeadProps, "children" | "sx">;

export const ElTableHead = (props: Props) => {
  return <TableHead {...props} />;
};
