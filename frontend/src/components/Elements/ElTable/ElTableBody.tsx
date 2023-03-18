import { TableBody, TableBodyProps } from "@mui/material";

type Props = Pick<TableBodyProps, "children" | "sx">;

export const ElTableBody = (props: Props) => {
  return <TableBody {...props} />;
};
