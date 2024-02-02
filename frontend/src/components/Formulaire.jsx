import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import "./Formulaire.css";

function Formulaire() {
  const [sendMessage, setSendMessage] = useState("");

  const [formulaire, setFormulaire] = useState({
    prenom: "",
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newFormulaireData = { ...formulaire };
    newFormulaireData[inputName] = inputValue;
    setFormulaire(newFormulaireData);
  };

  const getMessageReady = (msg) => {
    setSendMessage(msg);

    setFormulaire({
      nom: "",
      prenom: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSendMessage("");
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x6nk8jc",
        "template_r9v1yhs",
        formulaire,
        "3Cm68m6OqOF4uahyu"
      )
      .then(
        () => {
          getMessageReady("Votre formulaire a bien été envoyé");
        },
        () => {
          getMessageReady(
            "Une erreur s'est produite, veuillez ré-essayer ultérieurement"
          );
        }
      );
  };

  return (
    <div id="idFormulaire" className="formulaire">
      <p>{sendMessage}</p>
      <form className="contact" onSubmit={sendEmail}>
        <h3 className="titleContact">Nous contacter</h3>
        <p className="paragrapheContact">
          Nos équipes sont à votre disposition pour répondre à vos demandes dans
          les meilleurs délais.
        </p>
        <label htmlFor="name" className="label">
          Prénom
          <input
            type="text"
            name="prenom"
            placeholder="Votre prenom"
            onChange={handleChange}
            value={formulaire.prenom}
            required
          />
        </label>

        <label className="label">
          Nom
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            onChange={handleChange}
            value={formulaire.nom}
            required
          />
        </label>

        <label className="label">
          Email
          <input
            type="text"
            name="email"
            placeholder="Votre email"
            onChange={handleChange}
            value={formulaire.email}
            required
          />
        </label>

        <label className="label">
          Message
          <textarea
            type="text"
            name="message"
            placeholder="Votre Message"
            onChange={handleChange}
            value={formulaire.message}
            required
          />
        </label>

        <button type="submit" className="envoyer">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Formulaire;
