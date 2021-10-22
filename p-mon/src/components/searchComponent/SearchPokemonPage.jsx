import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Card from "../cardsList/Card";
import { SearchContext } from "../../Context";
import useFetch from "../hooks/fetch/useFetch";

import "./search.css";

const SearchPokemonPage = ({ searchby, searchtext }) => {
  const history = useHistory();
  const searchValueToContext = useContext(SearchContext);
  console.log(searchValueToContext);

  const { data, loading } = useFetch(
    `https://pokeapi.co/api/v2/${searchby}/${searchtext}`
  );

  return (
    <div>
      {loading ? (
        `${searchby}/${searchtext} Pokemons are loading...`
      ) : (
        <div>
          <section className="Search-heading">
            <h2>
              Search results for{" "}
              <span
                style={{ color: "lightblue" }}
              >{`${searchby} = ${searchtext}`}</span>
            </h2>
            <i class="fas fa-arrow-left"></i>
            <i
              className="fas fa-arrow-left back-icon"
              onClick={() => {
                history.goBack();
              }}
            ></i>
          </section>
          {data ? (
            <div className="search-page">
              <Card data={data} />
            </div>
          ) : (
            "Pokemons not available"
          )}
        </div>
      )}
    </div>
  );
};
export default SearchPokemonPage;
