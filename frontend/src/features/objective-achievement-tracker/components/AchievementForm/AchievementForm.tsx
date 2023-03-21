import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ElTypography } from "~/components/Elements/ElTypography";

import { AchievementFormSchema, achievementFormSchema } from "./achievement-form-schema";
import { HolidayFrame, OffDayFrame, TotalFrame, WorkdayFrame } from "./SpecificFrame";

export const AchievementForm = () => {
  const {
    control,
    watch,
    trigger,
    formState: {
      isDirty,
      errors: {
        workday: workdayError,
        workdayHour: workdayHourError,
        holiday: holidayError,
        holidayHour: holidayHourError,
        offDay: offDayError,
        correlation: correlationError,
      },
    },
  } = useForm<AchievementFormSchema>({
    resolver: zodResolver(achievementFormSchema),
    mode: "all",
  });

  useEffect(() => {
    if (isDirty) trigger(["workday", "holiday", "offDay", "correlation"]);
  }, [
    trigger,
    isDirty,
    workdayError?.message,
    holidayError?.message,
    offDayError?.message,
    correlationError?.message,
  ]);

  return (
    <Stack spacing={2}>
      <WorkdayFrame
        control={control}
        isDayError={!!workdayError}
        isHourError={!!workdayHourError}
      />
      <HolidayFrame
        control={control}
        isDayError={!!holidayError}
        isHourError={!!holidayHourError}
      />
      <OffDayFrame control={control} isDayError={!!offDayError} />
      <TotalFrame watch={watch} />

      <ElTypography color={(theme) => theme.palette.error.main}>
        {correlationError?.message}
      </ElTypography>
    </Stack>
  );
};
