import { Box, Container, Grid, Stack } from "@mui/material";
import { Navigate } from "@tanstack/react-location";
import { useEffect, useState } from "react";

import { ElButton } from "~/components/Elements";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ElList } from "~/components/Elements/ElList";
import { UnfoldLessIcon, UnfoldMoreIcon } from "~/components/Icons";
import { useGetDashButtonsQuery, useStartEntryMutation } from "~/graphql";

import { DashButton, DashButtonDetailListItem } from "../components/DashButton";
import { useCreateDashButtonDialog } from "../hooks/use-create-dash-button-dialog";

export const HomePage = () => {
  const { data, error } = useGetDashButtonsQuery();
  const [startEntry] = useStartEntryMutation();

  const { handleOpen, render: CreateDashButtonDialog } = useCreateDashButtonDialog();

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
    setExpandedList((current) => data?.dashButtonAll.map((_, i) => current[i] ?? false) ?? []);
  }, [data?.dashButtonAll]);

  if (error) {
    return <Navigate to="/error" />;
  }

  if (!data) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ height: "inherit" }}>
        <Stack spacing={2}>
          <Box display="flex" flexDirection="row">
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
            <Box flexGrow={1} />
            <ElButton onClick={handleOpen}>追加</ElButton>
          </Box>
          <Box width="100%" sx={{ display: "flex", alignItems: "top" }}>
            <Grid container spacing={2}>
              {data?.dashButtonAll.map((dashButton, i) => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={dashButton.id}>
                  <DashButton
                    dashButtonId={dashButton.id}
                    details={
                      <ElList sx={{ p: 0 }}>
                        <DashButtonDetailListItem label="Client" content={dashButton.client} />
                        <DashButtonDetailListItem label="Project" content={dashButton.project} />
                      </ElList>
                    }
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
      <CreateDashButtonDialog />
    </>
  );
};
