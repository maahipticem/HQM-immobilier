import React from "react";
import { Outlet } from "react-router-dom";

import NavbarAdmin from "../components/NavbarAdmin";

function Administration() {
  return (
    <div>
      <div className="navigation">
        <NavbarAdmin />
      </div>
      <Outlet />
    </div>
  );
}

export default Administration;
