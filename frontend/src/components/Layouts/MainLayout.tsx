import { Box } from "@mui/material";

import { ElHeader } from "../Elements";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = (props: Props) => {
  return (
    <Box height="100vh" minHeight="100vh">
      <Box height={64}>
        <ElHeader title="Toggl Dash" position="static" />
      </Box>
      <Box height="calc(100vh - 64px)" overflow="auto">
        <Box p={(theme) => theme.spacing(2, 0)}>{props.children}</Box>
      </Box>
    </Box>
  );
};
