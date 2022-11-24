import { Box, Container, Stack } from "@mui/material";
import base64 from "base-64";

import { ElPaper } from "~/components/Elements";
import { ElTypography } from "~/components/Elements/ElTypography";
import { useStrictCookies } from "~/lib/use-strict-cookies";

import { ApiTokenRegisterForm } from "../components/ApiTokenRegisterForm/ApiTokenRegisterForm";

export const HomePage = () => {
  const [, setCookies] = useStrictCookies();

  return (
    <Container maxWidth="sm" sx={{ height: "inherit", display: "flex", alignItems: "center" }}>
      <Box width="100%">
        <ElPaper sx={{ p: 2 }}>
          <Stack spacing={1}>
            <ElTypography>Toggl の API トークンを入力してください</ElTypography>
            <ApiTokenRegisterForm
              onSubmit={({ apiToken }) => {
                setCookies("toggl-api-token", apiToken, {
                  secure: true,
                  encode: (value) => base64.encode(value),
                  sameSite: true,
                  maxAge: 60 * 60 * 24 * 30,
                });
              }}
            />
          </Stack>
        </ElPaper>
      </Box>
    </Container>
  );
};
