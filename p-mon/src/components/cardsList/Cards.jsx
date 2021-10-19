import React, { useState, useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";

import useDoubleFetch from "../hooks/fetch/useDoubleFetch";
import "./cards.css";

export const Cards = () => {
  const { page } = useParams();
  const [limit, setLimit] = useState(4);
  const [offset, setOffset] = useState(0);
  const [pageNo, setPageNo] = useState(Number(page) || 1);
  const [nextUri, setnextUri] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const history = useHistory();
  /*    const uri = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`; */

  //calling useFetch hooks
  let { data, next, loading, error, prev } = useDoubleFetch(nextUri);

  const handlePrevious = () => {
    setPageNo(pageNo - 1);
    setnextUri(prev);
    if (pageNo <= 0) return;
    history.push(`/page/${pageNo}`);
  };
  const handleNext = () => {
    if (pageNo === 0) setPageNo(pageNo);
    setPageNo(pageNo + 1);
    setnextUri(next);
    history.push(`/page/${pageNo}`);
  };

  useEffect(() => {}, []);

  return (
    <div>
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

      <div className="paginating-Links">
        {/* <NavLink to={`/page/${pageNo}`}>Previous</NavLink>
        <NavLink to={`/page/${pageNo}`}>Next</NavLink> */}
        {pageNo === 1 ? null : (
          <button onClick={handlePrevious}>previous</button>
        )}
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};
