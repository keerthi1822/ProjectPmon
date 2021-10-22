import React from "react";
import { useHistory } from "react-router-dom";

import useSearchFetch from "../hooks/fetch/useSearchFetch";
import Card from "../cardsList/Card";

const AbilitySearchPage = ({ searchby, searchtext }) => {
  const history = useHistory();

  const { data, loading } = useSearchFetch(
    `https://pokeapi.co/api/v2/${searchby}/${searchtext}`
  );

  return (
    <div>
      {loading ? (
        `${searchby} = ${searchtext} pokemons are loading...`
      ) : (
        <div>
          <section className="Search-heading">
            <h2>
              Search results for{" "}
              <span style={{ color: "lightblue" }}>
                {" "}
                {`${searchby} = ${searchtext}`}
              </span>
            </h2>

            <i
              className="fas fa-arrow-left back-icon"
              onClick={() => {
                history.goBack();
              }}
            ></i>
          </section>
          {data ? (
            <div className="search-page">
              {data.map((item) => (
                <Card data={item.data} />
              ))}
            </div>
          ) : (
            "Pokemons not available"
          )}
        </div>
      )}
    </div>
  );
};

export default AbilitySearchPage;
