import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeCard.css";
import { Carousel } from "react-responsive-carousel";

function HomeCard({ home }) {
  return (
    <div className="homeImageHome">
      <Carousel className="carousel">
        <div className="carouselImage">
          <Link to={`/homes/${home.id}`} className="linkTitle">
            <h2>{home.name}</h2>
          </Link>
          <img className="logoImage" src={home.imageToUrl} alt="Slide 1" />
        </div>
        <div>
          <Link to={`/homes/${home.id}`} className="linkTitle">
            <h2>{home.name}</h2>
          </Link>
          <img className="logoImage" src={home.imageToUrl2} alt="Slide 2" />
        </div>
        <div>
          <Link to={`/homes/${home.id}`} className="linkTitle">
            <h2>{home.name}</h2>
          </Link>
          <img className="logoImage" src={home.imageToUrl3} alt="Slide 3" />
        </div>
        <div>
          <Link to={`/homes/${home.id}`} className="linkTitle">
            <h2>{home.name}</h2>
          </Link>
          <img className="logoImage" src={home.imageToUrl4} alt="Slide 4" />
        </div>
        <div>
          <Link to={`/homes/${home.id}`} className="linkTitle">
            <h2>{home.name}</h2>
          </Link>
          <img className="logoImage" src={home.imageToUrl5} alt="Slide 5" />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCard;
