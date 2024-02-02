import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";

// const title = {
//   name: "",
// };

function Search() {
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(connexion("./homes"))
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    value.length > 2 && setSearchTerm(value);
  };

  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search_results">
        <div className="search_result">donnée</div>
      </div>
    </div>
  );
}

export default Search;
