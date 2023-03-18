import { Box, SxProps, Theme } from "@mui/material";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  noop,
  useReactTable,
} from "@tanstack/react-table";
import { FC } from "react";
import { match } from "ts-pattern";

import {
  ElTable,
  ElTableBody,
  ElTableCell,
  ElTableHead,
  ElTableRow,
} from "~/components/Elements/ElTable";

export type MonthlyObjectiveInfo = {
  month: number;
  borderTime: number;
  availableTime: number;
  achievementTime?: number;
};

const columnHelper = createColumnHelper<MonthlyObjectiveInfo>();

const defaultColumns = [
  columnHelper.accessor("month", {
    header: noop,
    cell: (info) => {
      return <strong>{info.getValue()} 月</strong>;
    },
  }),
  columnHelper.accessor("availableTime", {
    header: () => <span>利用可能</span>,
    cell: (info) => <span>{info.getValue()} H</span>,
  }),
  columnHelper.accessor("borderTime", {
    header: () => <span>ボーダー</span>,
    cell: (info) => <span>{info.getValue()} H</span>,
  }),
  columnHelper.accessor("achievementTime", {
    header: () => <span>実績</span>,
    cell: (info) => {
      const borderTime = info.row.getValue<number>("borderTime");
      const achievementTime = info.getValue();

      const style = match<boolean, SxProps<Theme>>(borderTime <= (achievementTime ?? 0))
        .with(true, () => {
          return {
            color: (theme) => theme.palette.success.light,
            fontWeight: 700,
          };
        })
        .with(false, () => {
          return {
            color: (theme) => theme.palette.error.main,
          };
        })
        .exhaustive();

      return (
        <Box component="span" sx={style}>
          {achievementTime && `${achievementTime} H`}
        </Box>
      );
    },
  }),
];

type Props = {
  data: MonthlyObjectiveInfo[];
};

export const AchievementTable: FC<Props> = (props) => {
  const table = useReactTable({
    data: props.data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box width={1000}>
      <ElTable size="small" sx={{ writingMode: "vertical-lr" }}>
        <ElTableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <ElTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <ElTableCell
                  key={header.id}
                  colSpan={header.colSpan}
                  sx={{ writingMode: "horizontal-tb" }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </ElTableCell>
              ))}
            </ElTableRow>
          ))}
        </ElTableHead>
        <ElTableBody>
          {table.getRowModel().rows.map((row) => (
            <ElTableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <ElTableCell key={cell.id} sx={{ writingMode: "horizontal-tb" }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ElTableCell>
              ))}
            </ElTableRow>
          ))}
        </ElTableBody>
      </ElTable>
    </Box>
  );
};
