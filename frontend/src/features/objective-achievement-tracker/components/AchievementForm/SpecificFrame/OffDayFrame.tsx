import { Box, Typography } from "@mui/material";
import { Control } from "react-hook-form";

import { RhfTextField } from "~/components/Compositions";
import { ElTypography } from "~/components/Elements/ElTypography";

import { AchievementFormSchema } from "../achievement-form-schema";
import { RowFrame, DayFieldFrame } from "../Frame";

type Props = {
  control: Control<AchievementFormSchema>;
  isDayError?: boolean;
};

export const OffDayFrame = (props: Props) => {
  return (
    <RowFrame>
      <ElTypography>オフ</ElTypography>
      <DayFieldFrame>
        {(commonProps) => (
          <RhfTextField
            control={props.control}
            defaultValue={0}
            name="offDay"
            error={!!props.isDayError}
            {...commonProps}
          />
        )}
      </DayFieldFrame>
      <Box display="flex" gap={(theme) => theme.spacing(0, 1)}>
        <Typography sx={{ width: 64, textAlign: "end" }}>0</Typography>
        <Typography>時間</Typography>
      </Box>
    </RowFrame>
  );
};
