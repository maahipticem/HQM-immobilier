import React, { useState } from "react";
import axios from "axios";

function UserPage() {
  const [formData, setFormData] = useState({
    email: "",
    hashpassword: "",
    confirmpassword: "",
  });

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
      console.info("nouvel utilisateur ajouté:", response.data);
    } catch (error) {
      console.error("Error lors de l'ajout de l'utilisateur:", error);
    }
  };

  return (
    <div>
      <h2>Création identifiant</h2>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default UserPage;
