import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

function Administration() {
  const { connected } = useContext(AuthContext);
  if (connected !== "connected") {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/administration">Dashbaord</Link>
        <Link to="/administration/annonce">Annonce</Link>
      </nav>
    </div>
  );
}

export default Administration;
