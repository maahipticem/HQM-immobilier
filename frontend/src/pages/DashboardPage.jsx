import React, { useState, useEffect } from "react";
import HomeCardAdmin from "../components/HomeCardAdmin";
import connexion from "../services/connexion";

import "./Dashboard.css";
import Footer from "../components/Footer";

function DashboardPage() {
  const [annonces, setAnnonces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAnnonces = async () => {
    try {
      const myAnnonces = await connexion.get(`/homes`).then((res) => res.data);
      setAnnonces(myAnnonces);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAnnonces();
  }, []);

  const deleteAnnonce = async (id) => {
    try {
      await connexion.delete(`homes/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <p className="dahsboard-paragraphe">
        Bienvenue sur ton espace consultant
      </p>
      <div>
        <div className="searchBar">
          Recherche par nom :
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher"
            onChange={handleSearchTerm}
          />
        </div>
      </div>
      <div className="containerHomeAdmin">
        {annonces
          .filter((val) => {
            return val.name.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((home) => (
            <HomeCardAdmin
              key={home.id}
              home={home}
              deleteAnnonce={deleteAnnonce}
            />
          ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;
