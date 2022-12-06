import { Box, Container, Grid, Stack } from "@mui/material";
import { useState } from "react";

import { ElIconButton } from "~/components/Elements/ElIconButton";
import { UnfoldLessIcon, UnfoldMoreIcon } from "~/components/Icons";

import { DashButton } from "../components/DashButton/DashButton";

export const HomePage = () => {
  const [expandedList, setExpandedList] = useState([false, false, false, false, false, false]);

  const handleChange = (index: number) => {
    setExpandedList((current) => [
      ...current.slice(0, index),
      !current.at(index),
      ...current.slice(index + 1),
    ]);
  };

  const handleShrinkAll = () => {
    setExpandedList((current) => current.map(() => false));
  };

  const handleExpandAll = () => {
    setExpandedList((current) => current.map(() => true));
  };

  return (
    <Container maxWidth="lg" sx={{ height: "inherit" }}>
      <Stack spacing={2}>
        <Box>
          {expandedList.every(Boolean) ? (
            <ElIconButton onClick={handleShrinkAll}>
              <UnfoldLessIcon />
            </ElIconButton>
          ) : (
            <ElIconButton onClick={handleExpandAll}>
              <UnfoldMoreIcon />
            </ElIconButton>
          )}
        </Box>
        <Box width="100%" sx={{ display: "flex", alignItems: "top" }}>
          <Grid container spacing={2}>
            {expandedList.map((expanded, i) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={`dash-button-${i}`}>
                <DashButton
                  details="details"
                  expanded={expanded}
                  onChange={() => handleChange(i)}
                  onStart={() => {}}
                  summary="summary"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};
