import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm } from "react-hook-form";

import { AvailableTimeFormSchema, availableTimeFormSchema } from "./available-time-form-schema";

type Props = {
  defaultValues?: DefaultValues<AvailableTimeFormSchema>;
};

export const useAvailableTimeForm = (props: Props = {}) => {
  const {
    control,
    watch,
    trigger,
    handleSubmit,
    formState: {
      isDirty,
      isValid,
      errors: {
        weekday: weekdayError,
        weekdayHour: weekdayHourError,
        holiday: holidayError,
        holidayHour: holidayHourError,
        offDay: offDayError,
        correlation: correlationError,
      },
    },
  } = useForm<AvailableTimeFormSchema>({
    resolver: zodResolver(availableTimeFormSchema),
    defaultValues: props.defaultValues,
    mode: "all",
  });

  return {
    control,
    watch,
    trigger,
    handleSubmit,
    formState: {
      isDirty,
      isValid,
      errors: {
        weekday: weekdayError,
        weekdayHour: weekdayHourError,
        holiday: holidayError,
        holidayHour: holidayHourError,
        offDay: offDayError,
        correlation: correlationError,
      },
    },
  };
};

export type UseAchievementFormReturn = ReturnType<typeof useAvailableTimeForm>;
