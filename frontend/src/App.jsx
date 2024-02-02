import { Link } from "react-router-dom";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import Formulaire from "./components/Formulaire";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  const contactRef = useRef();

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="background" />
      <main className="main">
        <Navbar onContactClick={scrollToContact} />

        <section>
          <div className="hero">
            <div className="presentation">
              <h1>Le prestige n'est plus un luxe.</h1>
              <p>
                QHM Immobilier vous ouvrira les portes des demeures les plus
                exclusives de la Côte d'Azur : Villas de luxe, domaines de
                prestige, résidences d'époque, châteaux, penthouses uniques et
                propriétés rustiques.
              </p>
            </div>
            <div className="selection">
              <Link to="/homes" className="buttonApp">
                <button className="button" type="button">
                  Découvrir notre sélection
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section ref={contactRef}>
          <Formulaire />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
