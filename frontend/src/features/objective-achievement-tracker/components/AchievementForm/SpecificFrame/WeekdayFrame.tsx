import { Control } from "react-hook-form";

import { RhfTextField } from "~/components/Compositions";
import { ElTypography } from "~/components/Elements/ElTypography";
import { AvailableTimeFormSchema } from "~/features/objective-achievement-tracker/hooks";

import { RowFrame, DayFieldFrame, HourFieldFrame } from "../Frame";

type Props = {
  control: Control<AvailableTimeFormSchema>;
  isDayError?: boolean;
  isHourError?: boolean;
};

export const WeekdayFrame = (props: Props) => {
  return (
    <RowFrame>
      <ElTypography>平日</ElTypography>
      <DayFieldFrame>
        {(commonProps) => (
          <RhfTextField
            control={props.control}
            defaultValue={0}
            name="weekday"
            error={props.isDayError}
            {...commonProps}
          />
        )}
      </DayFieldFrame>
      <HourFieldFrame>
        {(commonProps) => (
          <RhfTextField
            control={props.control}
            defaultValue={0}
            name="weekdayHour"
            error={props.isHourError}
            {...commonProps}
          />
        )}
      </HourFieldFrame>
    </RowFrame>
  );
};
