import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "~/theme";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
