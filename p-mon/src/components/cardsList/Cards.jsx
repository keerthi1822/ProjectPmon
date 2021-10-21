import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Card from "./Card";
import Sort from "../sortComponent/Sort";
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
  const [sortBy, setSortBy] = useState();

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

  // sort function
  const compare = (a, b) =>
    sortBy === "name"
      ? a.data[sortBy].localeCompare(b.data[sortBy])
      : a.data[sortBy] - b.data[sortBy];

  /*   console.log(data.sort((a, b) => a.data.sortBy - b.data.sortBy)); */

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
      <Sort setSortBy={setSortBy} />

      {loading ? (
        <p>Pokemons are Loading...</p>
      ) : (
        <div className="cards">
          {data ? (
            data.sort(compare).map(({ data }) => <Card data={data} />)
          ) : (
            <p>data not found</p>
          )}
        </div>
      )}
    </div>
  );
};
