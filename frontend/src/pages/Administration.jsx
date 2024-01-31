import React from "react";
import { Outlet } from "react-router-dom";

import NavbarAdmin from "../components/NavbarAdmin";

function Administration() {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
    </div>
  );
}

export default Administration;
