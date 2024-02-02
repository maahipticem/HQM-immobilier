import React from "react";
import { useLoaderData, Link } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { carousel } from "react-responsive-carousel";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
import "./HomePage.css";

function HomePage() {
  const homes = useLoaderData();
  return (
    <div>
      <main>
        <div className="logo">
          <Link to="/">
            <Navbar />
          </Link>
        </div>
        <h2 className="title">TROUVER VOTRE FUTURE PROPRIETE</h2>

        <div className="body">
          <div>
            {homes.map((home) => (
              <HomeCard key={home.id} home={home} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
