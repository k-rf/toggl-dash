import { Box, Typography } from "@mui/material";
import { UseFormWatch } from "react-hook-form";

import { ElTypography } from "~/components/Elements/ElTypography";
import { AvailableTimeFormSchema } from "~/features/objective-achievement-tracker/hooks";
import { sum } from "~/utils/sum";

import { RowFrame } from "../Frame";

type Props = {
  watch: UseFormWatch<AvailableTimeFormSchema>;
};

export const TotalFrame = (props: Props) => {
  const [weekday, holiday, offDay, weekdayHour, holidayHour] = (
    ["weekday", "holiday", "offDay", "weekdayHour", "holidayHour"] as const
  ).map((e) => props.watch(e, 0)) as [number, number, number, number, number];

  return (
    <RowFrame>
      <ElTypography>合計</ElTypography>
      <Box display="flex" gap={(theme) => theme.spacing(0, 1)}>
        <Typography sx={{ width: 48, textAlign: "end" }}>
          {sum([weekday, holiday, offDay])}
        </Typography>
        <Typography>日</Typography>
      </Box>
      <Box display="flex" gap={(theme) => theme.spacing(0, 1)}>
        <Typography sx={{ width: 64, textAlign: "end" }}>
          {sum([weekday * weekdayHour, holiday * holidayHour])}
        </Typography>
        <Typography>時間</Typography>
      </Box>
    </RowFrame>
  );
};
