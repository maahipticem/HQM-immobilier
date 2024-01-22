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
    <div className="body">
      <section>
        <Navbar />
      </section>

      <div>
        <div className="containerHome">
          {homes.map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
