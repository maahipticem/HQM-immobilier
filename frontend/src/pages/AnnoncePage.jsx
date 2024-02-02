import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import Footer from "../components/Footer";
import "./AnnoncePage.css";

const annonceType = {
  name: "",
  numeroOffre: "",
  city: "",
  imageToUrl: "",
  imageToUrl2: "",
  imageToUrl3: "",
  imageToUrl4: "",
  imageToUrl5: "",
  adresse: "",
  descriptif: "",
  descriptif2: "",
  descriptif3: "",
  disponibilite: "",
};
function AnnoncePage() {
  const [annonce, setAnnonce] = useState(annonceType);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const { id } = useParams();

  const handleAnnonce = (event) => {
    setErrorMessage("");
    setAnnonce((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postAnnonce = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/homes", annonce);
      setIsSubmissionSuccessful(true);
      setAnnonce(annonceType);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        " Votre annonce n'a pu être envoyé. Veuillez verifier votre saisie."
      );
    }
  };

  const putAnnonce = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/homes/${id}`, annonce);
      setIsSubmissionSuccessful(true);
      setAnnonce(annonceType);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        " Votre annonce n'a pu être modifié. Veuillez verifier votre saisie."
      );
    }
  };

  useEffect(() => {
    if (id !== "new") {
      const getAnnonce = async () => {
        await connexion.get(`/homes/${id}`).then((res) => setAnnonce(res.data));
      };
      getAnnonce();
    }
  }, []);

  return (
    <div>
      <h2 className="titleAdmin">Gestion des annonces</h2>
      <main>
        <div className="form-container">
          <form
            className="contact"
            onSubmit={id !== "new" ? putAnnonce : postAnnonce}
          >
            <div className="labelAdmin">
              <label className="labelForm">
                Titre :
                <input
                  type="text"
                  name="name"
                  required
                  value={annonce.name}
                  onChange={handleAnnonce}
                  placeholder="Nom du domaine"
                />
              </label>
              <label className="labelForm">
                Numéro d'offre :
                <input
                  type="text"
                  name="numeroOffre"
                  required
                  value={annonce.numeroOffre}
                  onChange={handleAnnonce}
                  placeholder="Numéro d'offre"
                />
              </label>
              <label className="labelForm">
                Ville :
                <input
                  type="text"
                  name="city"
                  required
                  value={annonce.city}
                  onChange={handleAnnonce}
                  placeholder="ville"
                />
              </label>
              <label className="labelForm">
                Image 1 :
                <input
                  type="url"
                  name="imageToUrl"
                  required
                  value={annonce.imageToUrl}
                  onChange={handleAnnonce}
                  placeholder="Image 1"
                />
              </label>
              <label className="labelForm">
                Image 2 :
                <input
                  type="url"
                  name="imageToUrl2"
                  required
                  value={annonce.imageToUrl2}
                  onChange={handleAnnonce}
                  placeholder="Image 2"
                />
              </label>
              <label className="labelForm">
                Image 3 :
                <input
                  type="url"
                  name="imageToUrl3"
                  required
                  value={annonce.imageToUrl3}
                  onChange={handleAnnonce}
                  placeholder="Image 3"
                />
              </label>
              <label className="labelForm">
                Image 4 :
                <input
                  type="url"
                  name="imageToUrl4"
                  required
                  value={annonce.imageToUrl4}
                  onChange={handleAnnonce}
                  placeholder="Image 4"
                />
              </label>
              <label className="labelForm">
                Image 5 :
                <input
                  type="url"
                  name="imageToUrl5"
                  required
                  value={annonce.imageToUrl5}
                  onChange={handleAnnonce}
                  placeholder="Image 5"
                />
              </label>
              <label className="labelForm">
                Adresse :
                <input
                  type="text"
                  name="adresse"
                  required
                  value={annonce.adresse}
                  onChange={handleAnnonce}
                  placeholder="Adresse"
                />
              </label>
              <label className="labelForm">
                Descriptif :
                <textarea
                  name="descriptif"
                  required
                  value={annonce.descriptif}
                  onChange={handleAnnonce}
                  placeholder="Descriptif"
                />
              </label>
              <label className="labelForm">
                Composition logement :
                <textarea
                  name="descriptif2"
                  required
                  value={annonce.descriptif2}
                  onChange={handleAnnonce}
                  placeholder="Composition logement"
                />
              </label>
              <label className="labelForm">
                Environnement :
                <textarea
                  name="descriptif3"
                  required
                  value={annonce.descriptif3}
                  onChange={handleAnnonce}
                  placeholder="Environnement"
                />
              </label>
              <label className="labelForm">
                Disponibilite :
                <input
                  type="date"
                  name="disponibilite"
                  value={annonce.disponibilite}
                  onChange={handleAnnonce}
                />
              </label>
              <div className="button-container">
                <button type="submit" className="connection-button">
                  {id !== "new" ? "Modifier" : "Ajouter"}
                </button>
              </div>
            </div>
          </form>
          <div className="message">
            {isSubmissionSuccessful && (
              <p>Votre annonce a été envoyé avec succès.</p>
            )}
            {errorMessage && (
              <p className="messagePassword" style={{ color: "black" }}>
                {errorMessage}
              </p>
            )}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AnnoncePage;
