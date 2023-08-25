import type { RouteObject } from "react-router-dom";

export const path = "rest-countries-api-with-color-theme-switcher";

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
      async loader({ params }) {
        const data = await loader();
        return data.find((country: { name: string }) => country.name === params.name);
      },
    },
  ],
};

export default routes;
