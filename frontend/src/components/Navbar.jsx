import React from "react";
import Title from "./Title";
import "./Navbar.css";

function Navbar({ onLouerClick, onVendreClick, onContactClick }) {
  return (
    <nav className="nav">
      <div>
        <Title />
      </div>
      <div className="navbar">
        <button
          type="button"
          className="paragrapheNavbar"
          onClick={onLouerClick}
        >
          Louer
        </button>
        <button
          type="button"
          className="paragrapheNavbar"
          onClick={onVendreClick}
        >
          Vendre
        </button>
        <button
          type="button"
          className="paragrapheNavbar"
          onClick={onContactClick}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
