import { TableRow, TableRowProps } from "@mui/material";

type Props = Pick<TableRowProps, "children" | "sx">;

export const ElTableRow = (props: Props) => {
  return <TableRow {...props} />;
};
