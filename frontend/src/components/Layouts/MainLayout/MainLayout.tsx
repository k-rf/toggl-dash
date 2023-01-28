import { Box } from "@mui/material";

import { useStrictCookies } from "~/lib/use-strict-cookies";

import { ElHeader } from "../../Elements";

import { HeaderMenu } from "./HeaderMenu";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = (props: Props) => {
  const [cookies] = useStrictCookies();

  return (
    <Box height="100vh" minHeight="100vh">
      <Box height={64} mb={2}>
        <ElHeader
          title="Toggl Dash"
          position="static"
          menu={cookies["toggl-api-token"] && cookies["toggl-workspace-id"] && <HeaderMenu />}
        />
      </Box>
      <Box height={(theme) => `calc(100vh - ${theme.spacing(10)})`} overflow="auto">
        <Box height="100%">{props.children}</Box>
      </Box>
    </Box>
  );
};
