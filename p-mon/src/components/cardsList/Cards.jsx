import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import useDoubleFetch from "../hooks/fetch/useDoubleFetch";
import NextPrevBtns from "../pagination/NextPrevBtns";
import CardsPerPageSelection from "../pagination/CardsPerPageSelection";
import Card from "./Card";

import { SearchContext } from "../../Context";

import "./cards.css";

export const Cards = () => {
  // useContext
  const search = useContext(SearchContext);

  const searchPath = `${search.searchBy}/${search.searchText}`;

  const middlePath = search.searchText !== "" ? `${searchPath}` : `pokemon`;

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const [nextUri, setnextUri] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const setCardsPerPageValue = (inputLimit) => {
    console.log(inputLimit);
    setLimit(inputLimit);
    console.log(limit);
  };

  //calling useFetch hooks
  let { data, next, loading, error, prev } = useDoubleFetch(nextUri);

  useEffect(() => {
    setnextUri(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }, [limit, offset]);

  return (
    <div>
      <div className="pagination-bar">
        <CardsPerPageSelection setLimitValue={setCardsPerPageValue} />
        <NextPrevBtns
          next={next}
          setnextUri={setnextUri}
          prev={prev}
          limit={limit}
          setOffset={setOffset}
        />
      </div>

      {loading ? (
        <p>Pokemons are Loading...</p>
      ) : (
        <div className="cards">
          {data && data.map(({ data }) => <Card data={data} />)}
        </div>
      )}
    </div>
  );
};
