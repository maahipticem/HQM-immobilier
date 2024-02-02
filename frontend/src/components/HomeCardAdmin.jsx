import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./HomeCardAdmin.css";

function HomeCardAdmin({ home, deleteAnnonce }) {
  return (
    <div className="containerHomeImageAdmin">
      <div className="homeImageAdmin">
        <h2>{home.name}</h2>
        <div className="container-button">
          <button type="button" onClick={() => deleteAnnonce(home.id)}>
            Supprimer
          </button>
          <Link to={`/administration/annonces/${home.id}`} className="button">
            Editer
          </Link>
        </div>
      </div>
    </div>
  );
}

HomeCardAdmin.propTypes = {
  deleteAnnonce: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  home: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default HomeCardAdmin;
