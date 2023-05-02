import { Box } from "@mui/material";

import { AnnualObjective } from "../components/AnnualObjective/AnnualObjective";

export const ObjectiveAchievementTrackerPage = () => {
  return (
    <Box pl={2} sx={{ height: "inherit" }}>
      <AnnualObjective />
    </Box>
  );
};
