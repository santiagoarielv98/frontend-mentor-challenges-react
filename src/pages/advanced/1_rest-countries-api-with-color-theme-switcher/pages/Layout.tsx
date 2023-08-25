import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import bg from "../design/desktop-design-detail-dark.jpg";

import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <img
        src={bg}
        alt=""
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      />
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
};
