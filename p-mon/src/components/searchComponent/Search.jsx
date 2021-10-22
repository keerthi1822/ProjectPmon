import React, { /* useState,  */ useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { SearchContext } from "../../Context";

import "./search.css";

const Search = () => {
  /* const [searchBy, setSearchBy] = useState("");
  const [searchText, setSearchText] = useState(""); */

  const history = useHistory();

  // send/update data in context
  const searchDataToContext = useContext(SearchContext);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // using data from context just updated with on click
      if (searchDataToContext.searchBy === "")
        alert("please select from search by");
      else if (searchDataToContext.searchText === "")
        alert(`please enter an ${searchDataToContext.searchBy} to search`);
      else
        history.push(
          `/search/${searchDataToContext.searchBy}/${searchDataToContext.searchText}`
        );
    }
  };

  return (
    <div className="search-group">
      <select
        className=""
        onChange={(e) => {
          /*  setSearchBy(e.target.value); */
          searchDataToContext.setSearchBy(e.target.value);
        }}
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
          searchDataToContext.searchBy === "ability"
            ? "Pokemon ability"
            : searchDataToContext.searchBy === "pokemon"
            ? "Pokemon name"
            : "select search by"
        }
        onChange={(e) => {
          /* setSearchText(e.target.value.toLowerCase()); */
          searchDataToContext.setSearchText(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <NavLink
        to={`/search/${searchDataToContext.searchBy}/${searchDataToContext.searchText}`}
      >
        <i className="fas fa-search"></i>
      </NavLink>
    </div>
  );
};

export default Search;
/*  https://pokeapi.co/api/v2/ability/${ability} */
/* https://pokeapi.co/api/v2/pokemon/${pokeName} */
