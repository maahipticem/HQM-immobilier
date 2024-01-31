import React from "react";
import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./DetailsAnnoncePage.css";

function DetailAnnoncePage() {
  const home = useLoaderData();
  return (
    <div className="homeImage">
      <Carousel className="carousel">
        <div className="carouselImage">
          <h2>{home.name}</h2>

          <img className="logoImage" src={home.imageToUrl} alt="Slide 1" />
        </div>
        <div>
          <h2>{home.name}</h2>

          <img className="logoImage" src={home.imageToUrl2} alt="Slide 2" />
        </div>
        <div>
          <h2>{home.name}</h2>

          <img className="logoImage" src={home.imageToUrl3} alt="Slide 3" />
        </div>
        <div>
          <h2>{home.name}</h2>

          <img className="logoImage" src={home.imageToUrl4} alt="Slide 4" />
        </div>
        <div>
          <h2>{home.name}</h2>

          <img className="logoImage" src={home.imageToUrl5} alt="Slide 5" />
        </div>
      </Carousel>

      <div>
        <p>{home.descriptif}</p>
      </div>
    </div>
  );
}

export default DetailAnnoncePage;
