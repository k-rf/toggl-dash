import { TableCell, TableCellProps } from "@mui/material";

type Props = Pick<TableCellProps, "children" | "colSpan" | "sx">;

export const ElTableCell = (props: Props) => {
  return (
    <TableCell {...props} sx={{ borderColor: (theme) => theme.palette.grey[400], ...props.sx }} />
  );
};
