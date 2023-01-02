import { Box, Container, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import { ElIconButton } from "~/components/Elements/ElIconButton";
import { UnfoldLessIcon, UnfoldMoreIcon } from "~/components/Icons";
import { useGetDashButtonsQuery, useStartEntryMutation } from "~/graphql";

import { DashButton } from "../components/DashButton/DashButton";

export const HomePage = () => {
  const { data } = useGetDashButtonsQuery();
  const [startEntry] = useStartEntryMutation();

  const [expandedList, setExpandedList] = useState<boolean[]>([]);

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

  const handleStartClick = (dashButtonId: string) => {
    startEntry({ variables: { data: { dashButtonId } } });
  };

  useEffect(() => {
    setExpandedList(data?.dashButtonAll.map(() => false) ?? []);
  }, [data?.dashButtonAll]);

  if (!data) {
    return <Box>Loading...</Box>;
  }

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
            {data?.dashButtonAll.map((dashButton, i) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={dashButton.id}>
                <DashButton
                  details="details"
                  expanded={Boolean(expandedList.at(i))}
                  onChange={() => handleChange(i)}
                  onStart={() => handleStartClick(dashButton.id)}
                  summary={dashButton.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};
