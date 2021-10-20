import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import useDoubleFetch from "../hooks/fetch/useDoubleFetch";
import NextPrevBtns from "../pagination/NextPrevBtns";
import CardsPerPageSelection from "../pagination/CardsPerPageSelection";
import "./cards.css";

export const Cards = () => {
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
        <NextPrevBtns next={next} setnextUri={setnextUri} prev={prev} />
      </div>

      {loading ? (
        <p>Pokemons are Loading...</p>
      ) : (
        <div className="cards">
          {data &&
            data.map(({ data }) => (
              <NavLink
                to={`/pokemon/${data.name}`}
                className="card-Link"
                key={data.id}
              >
                <div key={data.id} className="card">
                  <div className="pokeCardImg-group">
                    <img
                      width="50"
                      src={data.sprites.other["official-artwork"].front_default}
                      alt={data.name}
                    />
                    <p>{data.name}</p>
                  </div>

                  <p>
                    <span>Height:</span>
                    {data.height}
                  </p>
                  <p>
                    <span>Weight:</span>
                    {data.weight}
                  </p>

                  <ul>
                    <span>Abilities:</span>
                    {data.abilities.map((ability) => (
                      <li key={ability.ability.name}>{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </NavLink>
            ))}
        </div>
      )}
    </div>
  );
};
