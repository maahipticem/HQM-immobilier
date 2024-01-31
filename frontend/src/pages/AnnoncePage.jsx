import React, { useState } from "react";
import connexion from "../services/connexion";
import "./AnnoncePage.css";

const annonceType = {
  name: "",
  numeroOffre: "",
  imageToUrl: "",
  imageToUrl2: "",
  imageToUrl3: "",
  imageToUrl4: "",
  imageToUrl5: "",
  adresse: "",
  descriptif: "",
  disponibilite: "",
};
function AnnoncePage() {
  const [annonce, setAnnonce] = useState(annonceType);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleAnnonce = (event) => {
    setAnnonce((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postAnnonce = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/annonces", annonce);
      setIsSubmissionSuccessful(true);
      setAnnonce(annonceType);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Administration d'une annonce</h2>
      {isSubmissionSuccessful && (
        <p>Votre annonce a été envoyée avec succès.</p>
      )}
      <main>
        <div className="form-container">
          <form className="form-connection" onSubmit={postAnnonce}>
            <div className="form-alllabel">
              <label>
                Titre
                <input
                  type="text"
                  name="name"
                  required
                  value={annonce.name}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Numéro d'offre
                <input
                  type="text"
                  name="numeroOffre"
                  required
                  value={annonce.numeroOffre}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Image 1
                <input
                  type="url"
                  name="imageToUrl"
                  required
                  value={annonce.imageToUrl}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Image 2
                <input
                  type="url"
                  name="imageToUrl2"
                  required
                  value={annonce.imageToUrl2}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Image 3
                <input
                  type="url"
                  name="imageToUrl3"
                  required
                  value={annonce.imageToUrl3}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Image 4
                <input
                  type="url"
                  name="imageToUrl4"
                  required
                  value={annonce.imageToUrl4}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Image 5
                <input
                  type="url"
                  name="imageToUrl5"
                  required
                  value={annonce.imageToUrl5}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Adresse
                <input
                  type="text"
                  name="adresse"
                  required
                  value={annonce.adresse}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Descriptif
                <textarea
                  name="descriptif"
                  required
                  value={annonce.descriptif}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <label>
                Disponibilite
                <input
                  type="date"
                  name="disponibilite"
                  required
                  value={annonce.disponibilite}
                  onChange={handleAnnonce}
                  className="label-form"
                />
              </label>
              <div className="button-container">
                <button type="submit" className="connection-button">
                  Ajouter
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AnnoncePage;
