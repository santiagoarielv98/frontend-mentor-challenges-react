import { Outlet, type RouteObject } from "react-router-dom";

const path = "rest-countries-api-with-color-theme-switcher";

const routes: RouteObject = {
  path,
  element: <Outlet />,
  children: [
    {
      index: true,
      async lazy() {
        const { Home } = await import("./pages/Home");
        return { Component: Home };
      },
    },
    {
      path: "country/:name",
      async lazy() {
        const { Detail } = await import("./pages/Detail");
        return { Component: Detail };
      },
    },
  ],
};

export default routes;
