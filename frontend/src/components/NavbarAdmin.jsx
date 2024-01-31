import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";

function NavbarAdmin() {
  const { connected, setConnected } = useContext(AuthContext);
  if (connected.role !== 1) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <button type="button">HOME</button>
        </Link>

        <Link to="/administration">
          <button type="button">DASHBOARD</button>
        </Link>

        <Link to="annonces">
          <button type="button">GESTION DES ANNONCES</button>
        </Link>
        <button type="button" onClick={() => setConnected({ role: null })}>
          DECONNEXION
        </button>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
