import { Divider, Stack } from "@mui/material";
import { useEffect } from "react";

import { ElTypography } from "~/components/Elements/ElTypography";

import { AvailableTimeFormSchema, UseAchievementFormReturn } from "../../hooks";

import { HolidayFrame, OffDayFrame, TotalFrame, WeekdayFrame } from "./SpecificFrame";

type Props = {
  id: string;
  methods: UseAchievementFormReturn;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>, value: AvailableTimeFormSchema) => void;
};

export const AchievementForm = (props: Props) => {
  const {
    control,
    watch,
    trigger,
    handleSubmit,
    formState: {
      isDirty,
      errors: {
        weekday: weekdayError,
        weekdayHour: weekdayHourError,
        holiday: holidayError,
        holidayHour: holidayHourError,
        offDay: offDayError,
        correlation: correlationError,
      },
    },
  } = props.methods;

  useEffect(() => {
    if (isDirty) trigger(["weekday", "holiday", "offDay", "correlation"]);
  }, [
    trigger,
    isDirty,
    weekdayError?.message,
    holidayError?.message,
    offDayError?.message,
    correlationError?.message,
  ]);

  return (
    <form
      id={props.id}
      onSubmit={(e) =>
        handleSubmit((value) => {
          props.onSubmit?.(e, value);
        })(e)
      }
    >
      <Stack spacing={2}>
        <WeekdayFrame
          control={control}
          isDayError={!!weekdayError}
          isHourError={!!weekdayHourError}
        />
        <HolidayFrame
          control={control}
          isDayError={!!holidayError}
          isHourError={!!holidayHourError}
        />
        <OffDayFrame control={control} isDayError={!!offDayError} />

        <Divider />

        <TotalFrame watch={watch} />

        <ElTypography color={(theme) => theme.palette.error.main}>
          {correlationError?.message}
        </ElTypography>
      </Stack>
    </form>
  );
};
