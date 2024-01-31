import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

import "./Navbar.css";

function Navbar({ onVendreClick, onContactClick }) {
  return (
    <nav className="nav">
      <div>
        <Title />
      </div>
      <div className="navbar">
        <Link to="/homes" className="buttonApp">
          <button
            type="button"
            className="paragrapheNavbar"
            onClick={onVendreClick}
          >
            Vendre
          </button>
        </Link>

        <a href="#idFormulaire">
          <button
            type="button"
            className="paragrapheNavbar"
            onClick={onContactClick}
          >
            Contact
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
