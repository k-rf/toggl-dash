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
      <Box height={64}>
        <ElHeader
          title="Toggl Dash"
          position="static"
          menu={cookies["toggl-api-token"] && <HeaderMenu />}
        />
      </Box>
      <Box height="calc(100vh - 64px)" overflow="auto">
        <Box p={(theme) => theme.spacing(2, 0)}>{props.children}</Box>
      </Box>
    </Box>
  );
};
