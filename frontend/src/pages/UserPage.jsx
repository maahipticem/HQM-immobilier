import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Title from "../components/Title";

function UserPage() {
  const [formData, setFormData] = useState({
    email: "",
    hashpassword: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        formData
      );
      setTimeout(() => {
        console.info("nouvel utilisateur ajouté:", response.data);
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Error lors de l'ajout de l'utilisateur:", error);
    }
  };

  return (
    <div>
      <div>
        <Title />
      </div>
      <h2 className="title">Création d'identifiant</h2>
      <form className="contact" onSubmit={handleSubmit}>
        <label className="email">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="password">
          Password:
          <input
            type="password"
            name="hashpassword"
            value={formData.hashpassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="confirme">
          Confirm Password:
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">INSCRIPTION</button>
      </form>

      <div className="footerUser">
        <Footer />
      </div>
    </div>
  );
}

export default UserPage;
