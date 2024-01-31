import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeCard.css";
import { Carousel } from "react-responsive-carousel";

function HomeCard({ home }) {
  return (
    <div className="homeImage">
      <Carousel className="carousel">
        <div className="carouselImage">
          <h2>{home.name}</h2>
          <img className="logoImage" src={home.imageToUrl} alt="Slide 1" />
        </div>
        <div>
          <img className="logoImage" src={home.imageToUrl2} alt="Slide 2" />
        </div>
        <div>
          <img className="logoImage" src={home.imageToUrl3} alt="Slide 3" />
        </div>
        <div>
          <img className="logoImage" src={home.imageToUrl4} alt="Slide 4" />
        </div>
        <div>
          <img className="logoImage" src={home.imageToUrl5} alt="Slide 5" />
        </div>
      </Carousel>
      <div className="homeDescriptif">
        <p>{home.descriptif}</p>
      </div>
      <div>
        <Link to="/">
          <button className="button" type="button">
            Plus de renseignements
          </button>
        </Link>
      </div>
    </div>
  );
}

// function HomeCard({ home }) {
//   return (
//     <div>
//       <div className="homeImage">
//         <div>
//           <img className="logoImage" src={home.imageToUrl} alt={home.name} />
//         </div>
//         <div className="homeDescriptif">
//           <p>{home.name}</p>
//           <p>{home.disponibilite}</p>

//           <button type="button">Plus de details</button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default HomeCard;
