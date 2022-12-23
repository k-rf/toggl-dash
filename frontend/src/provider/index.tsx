import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { apolloClient } from "~/lib/apollo-client";
import { theme } from "~/theme";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ApolloProvider>
  );
};
