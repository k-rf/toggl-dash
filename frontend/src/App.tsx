import { Router } from "@tanstack/react-location";

import { location } from "./lib/react-location";
import { AppProvider } from "./provider";
import { routes } from "./routes";

export const App = () => {
  return (
    <AppProvider>
      <Router location={location} routes={routes} />
    </AppProvider>
  );
};
