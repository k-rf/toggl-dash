import { Box, Divider, FormLabel } from "@mui/material";
import { useAtom } from "jotai";

import { RhfTextField } from "~/components/Compositions";
import { ElTypography } from "~/components/Elements/ElTypography";
import { NavigateNextIcon } from "~/components/Icons";

import { useObjectiveForm } from "../../hooks";
import { annualObjectiveAtom } from "../../stores/annual-objective-atom";
import { annualObjectiveInfoAtom } from "../../stores/annual-objective-info-atom";
import { totalAnnualObjectiveInfoAtom } from "../../stores/total-annual-objective-info-atom";
import { AchievementTable } from "../AchievementTable";

export const AnnualObjective = () => {
  const [annualObjectiveInfo] = useAtom(annualObjectiveInfoAtom);
  const [total] = useAtom(totalAnnualObjectiveInfoAtom);
  const [annualObjective, setAnnualObjective] = useAtom(annualObjectiveAtom);

  const { control, watch } = useObjectiveForm();

  setAnnualObjective(watch("objective", 0));

  return (
    <>
      <Box display="flex" alignItems="center" mb={1}>
        <ElTypography sx={{ fontSize: 24 }}>自己啓発</ElTypography>
      </Box>

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
              error={total.availableTime < annualObjective || total.borderTime < annualObjective}
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
    </>
  );
};

const StyledDivider = () => {
  return <Divider orientation="vertical" flexItem variant="middle" sx={{ borderWidth: 1 }} />;
};
