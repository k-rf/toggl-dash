import { Box, Container, Grid } from "@mui/material";

import { DashButton } from "../components/DashButton/DashButton";

export const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "inherit", display: "flex", alignItems: "center" }}>
      <Box width="100%">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DashButton
              details="details"
              expanded
              onChange={() => {}}
              onStart={() => {}}
              summary="summary"
            />
          </Grid>
          <Grid item xs={4}>
            <DashButton
              details="details"
              expanded
              onChange={() => {}}
              onStart={() => {}}
              summary="summary"
            />
          </Grid>
          <Grid item xs={4}>
            <DashButton
              details="details"
              expanded
              onChange={() => {}}
              onStart={() => {}}
              summary="summary"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
