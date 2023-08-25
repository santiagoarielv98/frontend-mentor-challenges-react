import type { RouteObject } from "react-router-dom";

export const restCountriespath = "rest-countries-api-with-color-theme-switcher";

const routes: RouteObject = {
  path: restCountriespath,
  async lazy() {
    const { Layout } = await import("./pages/Layout");
    return { Component: Layout };
  },
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
