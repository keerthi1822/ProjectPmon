import React, { useState, useEffect, useContext } from "react";

import Card from "./Card";

import PaginationBar from "../pagination/PaginationBar";
// hooks
import useDoubleFetch from "../hooks/fetch/useDoubleFetch";

//Context
import { SearchContext } from "../../Context";
// css
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
    setLimit(inputLimit);
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
      <PaginationBar
        setLimitValue={setCardsPerPageValue}
        next={next}
        setnextUri={setnextUri}
        prev={prev}
        limit={limit}
        setOffset={setOffset}
      />

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
