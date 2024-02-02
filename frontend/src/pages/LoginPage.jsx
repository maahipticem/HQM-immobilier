import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import connexion from "../services/connexion";
import Navbar from "../components/Navbar";
import "./LoginPage.css";
import Footer from "../components/Footer";

const user = {
  email: "",
  hashpassword: "",
};
function LoginPage() {
  const [credentials, setCredentials] = useState(user);
  const [errorMessage, setErrorMessage] = useState("");
  const { setConnected } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const valid = await connexion.post("/login", credentials);
      setConnected(valid.data);
      setTimeout(() => {
        navigate("/administration");
      }, 1000);
    } catch (error) {
      setCredentials(user);
      setErrorMessage(
        " Vos identifiants de connexion ne correspondent à aucun compte"
      );
    }
  };
  return (
    <div>
      <Navbar />

      <h3 className="titleContact">Accès à l'espace administrateur</h3>

      <main className="adminContainaire">
        <div className="formContainer">
          <form className="contact" onSubmit={handleRequest}>
            <label className="label">
              Email
              <input
                type="text"
                name="email"
                placeholder="Votre email"
                required
                onChange={handleCredentials}
                value={credentials.email}
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                name="hashpassword"
                placeholder="Votre mot de passe"
                required
                onChange={handleCredentials}
                value={credentials.hashpassword}
              />
            </label>
            {errorMessage && (
              <p className="messagePassword" style={{ color: "black" }}>
                {errorMessage}
              </p>
            )}
            <button type="submit" className="envoyer">
              Se connecter
            </button>
          </form>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
