import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
/* import { SearchContext } from "../../Context"; */

import "./search.css";

const Search = () => {
  const [searchBy, setSearchBy] = useState("");
  const [searchText, setSearchText] = useState("");

  const history = useHistory();
  // Retrieve context data
  /* const searchData = useContext(SearchContext); */

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (searchBy === "") alert("please select from search by");
      else if (searchText === "")
        alert(`please enter an ${searchBy} to search`);
      else history.push(`/search/${searchBy}/${searchText}`);
    }
  };

  return (
    <div className="search-group">
      <select
        className=""
        onChange={(e) => setSearchBy(e.target.value)}
        onKeyPress={handleKeyPress}
      >
        <option value="" defaultValue>
          search by..
        </option>
        {["ability", "pokemon"].map((searchByItem, i) => (
          <option key={i} value={searchByItem}>
            {searchByItem}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder={
          searchBy === "ability"
            ? "Pokemon ability"
            : searchBy === "ability"
            ? "Pokemon name"
            : "select search by"
        }
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        onKeyPress={handleKeyPress}
      ></input>
      <NavLink to={`/search/${searchBy}/${searchText}`}>
        <i className="fas fa-search"></i>
      </NavLink>
    </div>
  );
};

export default Search;
/*  https://pokeapi.co/api/v2/ability/${ability} */
/* https://pokeapi.co/api/v2/pokemon/${pokeName} */
