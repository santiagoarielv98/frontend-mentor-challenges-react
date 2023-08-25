import type { RouteObject } from "react-router-dom";
import { Country } from "./types/countries";

export const path = "rest-countries-api-with-color-theme-switcher";

const loader = async () => {
  const data = await import("./data.json");
  return data.default as unknown as Country[];
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
        return data.find((country) => country.name === params.name);
      },
    },
  ],
};

export default routes;
