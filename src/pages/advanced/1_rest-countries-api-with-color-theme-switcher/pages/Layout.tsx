import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
};
