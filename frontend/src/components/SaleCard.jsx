import React, { useState } from "react";

import "./SaleCard.css";

function SaleCard({ app }) {
  // eslint-disable-next-line no-unused-vars
  const [sale, setSale] = useState(app.imgToUrl);

  const handleMouseEnter = () => {
    setSale(app.imgToUrl2);
  };

  const handleMouseLeave = () => {
    setSale(app.imgToUrl);
  };
  return (
    <div>
      <div className="containerSaleApp">
        <div className="SaleApp">
          <img
            className="imageSale"
            src={app.imageToUrl}
            alt={app.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <p>{app.name}</p>
          <p>{app.disponibilite}</p>

          <button type="button">Plus de details</button>
        </div>
      </div>
    </div>
  );
}

export default SaleCard;
