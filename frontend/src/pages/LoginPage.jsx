import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import connexion from "../services/connexion";
import "./LoginPage.css";

const user = {
  email: "",
  hashpassword: "",
};
function LoginPage() {
  const [credentials, setCredentials] = useState(user);
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
      setConnected(valid.data.msg);
      setTimeout(() => {
        navigate("/administration");
      }, 1000);
    } catch (error) {
      setCredentials(user);
    }
  };
  return (
    <div>
      <h3 className="titleContact">Accès à l'espace administrateur</h3>
      <main className="adminContainaire">
        <div className="formContainer">
          <form onSubmit={handleRequest}>
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
                type="text"
                name="hashpassword"
                placeholder="Votre mot de passe"
                required
                onChange={handleCredentials}
                value={credentials.hashpassword}
              />
            </label>
            <button type="submit" className="envoyer">
              Se connecter
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
