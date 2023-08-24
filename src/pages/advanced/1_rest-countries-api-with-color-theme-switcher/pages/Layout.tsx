import { Outlet } from "react-router-dom";

import bg from "../design/desktop-design-home-dark.jpg";
import Navbar from "../components/navbar/Navbar";

import "./Layout.css";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <img
        src={bg}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      />
      <Outlet />
    </div>
  );
};
