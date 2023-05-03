import { Table, TableProps } from "@mui/material";

type Props = Pick<TableProps, "children" | "size" | "sx">;

export const ElTable = (props: Props) => {
  return <Table {...props} />;
};
