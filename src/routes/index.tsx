import { Outlet, createBrowserRouter } from "react-router-dom";
import advancedRoutes from "../pages/advanced";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [...advancedRoutes],
  },
]);

export default router;
