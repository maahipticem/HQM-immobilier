import React from "react";

function RentCard({ rent }) {
  return (
    <div>
      <img src={rent.urlToImage} alt={rent.urlToImage} />
    </div>
  );
}

export default RentCard;
