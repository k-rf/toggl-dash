import { Box, Divider, FormLabel, Stack } from "@mui/material";
import { useAtom } from "jotai";

import { RhfTextField } from "~/components/Compositions";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ElTypography } from "~/components/Elements/ElTypography";
import { NavigateNextIcon, SaveIcon } from "~/components/Icons";
import { useRegisterAnnualObjectiveMutation } from "~/graphql";

import { useObjectiveForm } from "../../hooks";
import {
  annualObjectiveInfoAtom,
  totalAnnualObjectiveInfoAtom,
  annualObjectiveAtom,
  availableTimeListAtom,
} from "../../stores";
import { AchievementTable } from "../AchievementTable";

export const AnnualObjective = () => {
  const [registerAnnualObjective] = useRegisterAnnualObjectiveMutation();

  const [annualObjectiveInfo] = useAtom(annualObjectiveInfoAtom);
  const [total] = useAtom(totalAnnualObjectiveInfoAtom);
  const [annualObjective, setAnnualObjective] = useAtom(annualObjectiveAtom);
  const [availableTimeList] = useAtom(availableTimeListAtom);

  const {
    control,
    watch,
    formState: { isValid },
    objectiveError,
  } = useObjectiveForm();

  setAnnualObjective(watch("objective", 0));

  const isError =
    total.availableTime < annualObjective ||
    total.borderTime < annualObjective ||
    Boolean(objectiveError);

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={1} mb={1}>
        <ElTypography sx={{ fontSize: 24 }}>自己啓発</ElTypography>
        <ElIconButton
          size="medium"
          disabled={!isValid || isError}
          onClick={() => {
            registerAnnualObjective({
              variables: {
                data: {
                  year: 2023,
                  objectives: [{ clientId: 11111, objectiveTime: [annualObjective, 0, 0] }],
                  monthlyAvailableTimes: availableTimeList.map((e, i) => {
                    return {
                      month: i + 1,
                      holiday: { time: [e.holidayHour, 0, 0], weight: e.holiday },
                      weekday: { time: [e.weekdayHour, 0, 0], weight: e.weekday },
                      offDay: e.offDay,
                    };
                  }),
                },
              },
            });
          }}
        >
          <SaveIcon fontSize="inherit" />
        </ElIconButton>
      </Stack>

      <Box mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box display="flex" alignItems="center">
            <FormLabel htmlFor="objective">
              <ElTypography>目標時間</ElTypography>
            </FormLabel>
            <NavigateNextIcon />
            <RhfTextField
              control={control}
              defaultValue={0}
              name="objective"
              type="number"
              min={0}
              size="small"
              error={isError}
              sx={{
                "input::-webkit-outer-spin-button": { WebkitAppearance: "none" },
                "input::-webkit-inner-spin-button": { WebkitAppearance: "none" },
                width: 96,
                mr: 1,
              }}
            />
            <ElTypography>時間</ElTypography>
          </Box>
          <StyledDivider />

          <Box display="flex" alignItems="center">
            <ElTypography>実績</ElTypography>
            <NavigateNextIcon />
            <ElTypography sx={{ fontSize: 24, mr: 1 }}>{total.achievementTime}</ElTypography>
            <ElTypography>時間</ElTypography>
          </Box>
          <StyledDivider />

          <Box display="flex" alignItems="center">
            <ElTypography>利用可能</ElTypography>
            <NavigateNextIcon />
            <ElTypography sx={{ fontSize: 24, mr: 1 }}>{total.availableTime}</ElTypography>
            <ElTypography>時間</ElTypography>
          </Box>
          <StyledDivider />

          <Box display="flex" alignItems="center">
            <ElTypography>ボーダー</ElTypography>
            <NavigateNextIcon />
            <ElTypography sx={{ fontSize: 24, mr: 1 }}>{total.borderTime}</ElTypography>
            <ElTypography>時間</ElTypography>
          </Box>
        </Box>
      </Box>

      <AchievementTable data={annualObjectiveInfo} />
    </Box>
  );
};

const StyledDivider = () => {
  return <Divider orientation="vertical" flexItem variant="middle" sx={{ borderWidth: 1 }} />;
};
