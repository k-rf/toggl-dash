import { Control } from "react-hook-form";

import { RhfTextField } from "~/components/Compositions";
import { ElTypography } from "~/components/Elements/ElTypography";

import { AchievementFormSchema } from "../achievement-form-schema";
import { RowFrame, DayFieldFrame, HourFieldFrame } from "../Frame";

type Props = {
  control: Control<AchievementFormSchema>;
  isDayError?: boolean;
  isHourError?: boolean;
};

export const WorkdayFrame = (props: Props) => {
  return (
    <RowFrame>
      <ElTypography>平日</ElTypography>
      <DayFieldFrame>
        {(commonProps) => (
          <RhfTextField
            control={props.control}
            defaultValue={0}
            name="workday"
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
            name="workdayHour"
            error={props.isHourError}
            {...commonProps}
          />
        )}
      </HourFieldFrame>
    </RowFrame>
  );
};
