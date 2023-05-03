import { Navigate, Outlet, Route } from "@tanstack/react-location";

import { ErrorPage } from "~/common";
import { MainLayout } from "~/components/Layouts";
import { HomePage } from "~/features/home";
import { ObjectiveAchievementTrackerPage } from "~/features/objective-achievement-tracker";
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
      children: [
        { path: "/error", element: <ErrorPage /> },
        ...(cookies["toggl-api-token"] && cookies["toggl-workspace-id"]
          ? [
              { path: "/home", element: <HomePage /> },
              {
                path: "/objective-achievement-tracker",
                element: <ObjectiveAchievementTrackerPage />,
              },
              { path: "/", element: <Navigate to="/home" replace /> },
              { path: "*", element: <Navigate to="/home" replace /> },
            ]
          : [
              { path: "/register", element: <RegisterCookiePage /> },
              { path: "/", element: <Navigate to="/register" replace /> },
              { path: "*", element: <Navigate to="/register" replace /> },
            ]),
      ],
    },
  ];
};
