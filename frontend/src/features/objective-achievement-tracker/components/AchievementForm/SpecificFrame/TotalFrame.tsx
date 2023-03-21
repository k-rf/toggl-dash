import { Box, Typography } from "@mui/material";
import { UseFormWatch } from "react-hook-form";

import { ElTypography } from "~/components/Elements/ElTypography";

import { AchievementFormSchema } from "../achievement-form-schema";
import { RowFrame } from "../Frame";

type Props = {
  watch: UseFormWatch<AchievementFormSchema>;
};

export const TotalFrame = (props: Props) => {
  const [workday, holiday, offDay, workdayHour, holidayHour] = (
    ["workday", "holiday", "offDay", "workdayHour", "holidayHour"] as const
  ).map((e) => props.watch(e, 0)) as [number, number, number, number, number];

  return (
    <RowFrame>
      <ElTypography>合計</ElTypography>
      <Box display="flex" gap={(theme) => theme.spacing(0, 1)}>
        <Typography sx={{ width: 48, textAlign: "end" }}>
          {sum([workday, holiday, offDay])}
        </Typography>
        <Typography>日</Typography>
      </Box>
      <Box display="flex" gap={(theme) => theme.spacing(0, 1)}>
        <Typography sx={{ width: 64, textAlign: "end" }}>
          {sum([workday * workdayHour, holiday * holidayHour])}
        </Typography>
        <Typography>時間</Typography>
      </Box>
    </RowFrame>
  );
};

const sum = (values: (number | string)[]) => {
  return values.map(Number).reduce((p, c) => p + c, 0);
};
