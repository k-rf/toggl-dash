import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = (props: Props) => {
  return (
    <Box height="100vh" minHeight="100vh">
      {props.children}
    </Box>
  );
};
