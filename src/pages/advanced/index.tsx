import { RouteObject } from "react-router-dom";
import restCountriesApiWithColorThemeSwitcherRoutes from "./1_rest-countries-api-with-color-theme-switcher";

const advancedRoutes: RouteObject[] = [
  {
    path: "advanced",
    children: [restCountriesApiWithColorThemeSwitcherRoutes],
  },
];

export default advancedRoutes;
