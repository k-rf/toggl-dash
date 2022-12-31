import { Navigate, Outlet, Route } from "@tanstack/react-location";

import { MainLayout } from "~/components/Layouts";
import { HomePage } from "~/features/home";
import { RegisterCookiePage } from "~/features/register-toggl-config";
import { useStrictCookies } from "~/lib/use-strict-cookies";

const AppOutlet = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const useRoutes = (): Route[] => {
  const [cookies] = useStrictCookies();

  return [
    {
      element: <AppOutlet />,
      children: cookies["toggl-api-token"]
        ? [
            { path: "/home", element: <HomePage /> },
            { path: "/", element: <Navigate to="/home" replace /> },
            { path: "*", element: <Navigate to="/home" replace /> },
          ]
        : [
            { path: "/register", element: <RegisterCookiePage /> },
            { path: "/", element: <Navigate to="/register" replace /> },
            { path: "*", element: <Navigate to="/register" replace /> },
          ],
    },
  ];
};
