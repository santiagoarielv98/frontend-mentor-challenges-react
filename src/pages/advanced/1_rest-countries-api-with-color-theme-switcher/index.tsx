import type { RouteObject } from "react-router-dom";

const path = "rest-countries-api-with-color-theme-switcher";

const loader = async () => {
  const data = await import("./data.json");
  return data.default;
};

const routes: RouteObject = {
  path,
  async lazy() {
    const { Layout } = await import("./pages/Layout");
    return { Component: Layout };
  },
  children: [
    {
      index: true,
      async lazy() {
        const { Home } = await import("./pages/Home");
        return { Component: Home, loader };
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
