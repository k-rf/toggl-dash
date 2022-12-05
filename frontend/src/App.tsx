import { Router } from "@tanstack/react-location";

import { location } from "./lib/react-location";
import { AppProvider } from "./provider";
import { useRoutes } from "./routes";

export const App = () => {
  const routes = useRoutes();

  return (
    <AppProvider>
      <Router location={location} routes={routes} />
    </AppProvider>
  );
};
