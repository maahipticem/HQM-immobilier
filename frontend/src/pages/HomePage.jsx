import React from "react";
import { useLoaderData } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { carousel } from "react-responsive-carousel";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
import "./HomePage.css";

function HomePage() {
  const homes = useLoaderData();
  return (
    <div>
      <div className="logo">
        <Navbar />
      </div>
      <h2 className="title">TROUVER VOTRE FUTURE PROPRIETE</h2>

      <div className="body">
        <div>
          <div className="containerHome">
            {homes.map((home) => (
              <HomeCard key={home.id} home={home} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
