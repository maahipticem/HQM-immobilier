import React, { useState, useEffect } from "react";
import HomeCardAdmin from "../components/HomeCardAdmin";
import connexion from "../services/connexion";

import "./Dashboard.css";

function DashboardPage() {
  const [annonces, setAnnonces] = useState([]);

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

  return (
    <div>
      <div>DashbordPage</div>
      <p className="dahsboard-paragraphe">
        Bienvenue sur ton espace consultant
      </p>

      <div className="containerHome">
        {annonces.map((home) => (
          <HomeCardAdmin
            key={home.id}
            home={home}
            deleteAnnonce={deleteAnnonce}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
