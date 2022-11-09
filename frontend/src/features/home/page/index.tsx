import { Box, Container } from "@mui/material";

import { ElPaper } from "~/components/Elements";

import { ApiTokenRegisterForm } from "../components/ApiTokenRegisterForm";

export const HomePage = () => {
  return (
    <Container maxWidth="sm" sx={{ height: "inherit", display: "flex", alignItems: "center" }}>
      <Box width="100%">
        <ElPaper sx={{ p: 2 }}>
          <ApiTokenRegisterForm />
        </ElPaper>
      </Box>
    </Container>
  );
};
