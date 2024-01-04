import { Link, useLoaderData } from "react-router-dom";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import RentCard from "./components/RentCard";
import SaleCard from "./components/SaleCard";
import Formulaire from "./components/Formulaire";
import "./App.css";

function App() {
  const apps = useLoaderData();
  const rents = useLoaderData();
  const louerRef = useRef();
  const vendreRef = useRef();
  const contactRef = useRef();

  const scrollToLouer = () => {
    louerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVendre = () => {
    vendreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section>
        <div className="entrée">
          <div className="position">
            <Navbar
              onLouerClick={scrollToLouer}
              onVendreClick={scrollToVendre}
              onContactClick={scrollToContact}
            />
            <img
              className="image"
              src="https://img.freepik.com/premium-photo/house-with-pool-yard-house-with-large-window-white-house_625492-4913.jpg"
              alt="villa"
            />

            <div className="presentation">
              <h1>La beauté n'est plus un luxe.</h1>
              <p>
                QHM Immobilier vous ouvrira les portes des demeures les plus
                exclusives de Saint Tropez : Villas de luxe, domaines de
                prestige, résidence d'époque, châteaux, penthouses uniques et
                propriétés rustiques.
              </p>
            </div>
          </div>
        </div>
        <section ref={vendreRef}>
          <div>
            <div>
              <h2>vendre</h2>
            </div>
            <div>
              {rents.map((rent) => (
                <RentCard key={rent.id} rent={rent} />
              ))}
            </div>
            <div>
              <Link to="/homes" className="buttonApp">
                <button className="button" type="button">
                  Découvrir notre sélection "VENTES
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="containerSale" ref={louerRef}>
        <div className="location">
          <h3>Nos locations</h3>
          <p>
            Notre Agence QHM Immobilier propose un service de location
            saisonnière. Louer votre villa de luxe à Saint-Tropez pour un séjour
            inoubliable entre amis ou en famille. Nous mettons à votre
            disposition une sélection des plus belles villas et appartements de
            grand standing disponibles en location estivale sur Saint-Tropez et
            ses environs. Venez profiter de la plus belle des stations
            balnéaires de la Côte d'Azur, très prisée des touristes du monde
            entier. Saint-Tropez et son offre touristique, Plage Privée,
            Restaurant, Night-club, demeure encore aujourd'hui un lieu magique
            et emblématique de la French Riviera pour faire la fête et s'amuser
            tout l'été.
          </p>
        </div>
        <div>
          <div className="locationImage">
            {apps.map((app) => (
              <SaleCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef}>
        <Formulaire />
      </section>
    </div>
  );
}

export default App;
