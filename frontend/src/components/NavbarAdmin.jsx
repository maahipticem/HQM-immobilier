import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";
import "./NavbarAdmin.css";
import Title from "./Title";

function NavbarAdmin() {
  const { connected, setConnected } = useContext(AuthContext);
  if (connected.role !== 1) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="admin">
      <div>
        <Title />
      </div>
      <nav className="navigation">
        <Link to="/" className="button">
          HOME
        </Link>

        <Link to="/administration" className="button">
          DASHBOARD
        </Link>

        <Link to="/administration/annonces/new" className="button">
          GESTION DES ANNONCES
        </Link>
        <button type="button" onClick={() => setConnected({ role: null })}>
          DECONNEXION
        </button>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
