import { Navigate, Outlet, Route } from "@tanstack/react-location";

import { MainLayout } from "~/components/Layout";

const AppOutlet = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const routes: Route[] = [
  {
    element: <AppOutlet />,
    children: [
      { path: "/", element: <div>Hello World</div> },
      { path: "/404", element: <div>404</div> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];
