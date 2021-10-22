import React /* {useContext}  */ from "react";
import { useParams } from "react-router-dom";
import AbilitySearchPage from "./AbilitySearchPage";
import SearchPokemonPage from "./SearchPokemonPage";
/* import { SearchContext } from "../../Context"; */

import "./search.css";

const SelectSearch = () => {
  // Retrieve context data
  /*   const searchData = useContext(SearchContext); */
  const { searchby, searchtext } = useParams();

  return (
    <div>
      {searchby === "ability" ? (
        <AbilitySearchPage searchby={searchby} searchtext={searchtext} />
      ) : (
        <SearchPokemonPage searchby={searchby} searchtext={searchtext} />
      )}
    </div>
  );
};
export default SelectSearch;
