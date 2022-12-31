import { Box, Container, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-location";
import base64 from "base-64";

import { ElPaper } from "~/components/Elements";
import { ElTypography } from "~/components/Elements/ElTypography";
import { useStrictCookies } from "~/lib/use-strict-cookies";

import { TogglConfigRegisterForm } from "../components/TogglConfigRegisterForm/TogglConfigRegisterForm";

export const RegisterCookiePage = () => {
  const [, setCookies] = useStrictCookies();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ height: "inherit", display: "flex", alignItems: "center" }}>
      <Box width="100%">
        <ElPaper sx={{ p: 2 }}>
          <Stack spacing={1}>
            <ElTypography>Toggl の API トークンを入力してください</ElTypography>
            <TogglConfigRegisterForm
              onSubmit={async ({ apiToken }) => {
                setCookies("toggl-api-token", apiToken, {
                  secure: true,
                  encode: (value) => base64.encode(value),
                  sameSite: true,
                  maxAge: 60 * 60 * 24 * 30,
                });

                navigate({ to: "/home", replace: true });
              }}
            />
          </Stack>
        </ElPaper>
      </Box>
    </Container>
  );
};
