import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import useSearchFetch from "../hooks/fetch/useSearchFetch";
import Card from "../cardsList/Card";
import { SearchContext } from "../../Context";

const AbilitySearchPage = ({ searchby, searchtext }) => {
  const history = useHistory();

  const { data, loading } = useSearchFetch(
    `https://pokeapi.co/api/v2/${searchby}/${searchtext}`
  );
  const searchValueToContext = useContext(SearchContext);
  console.log(searchValueToContext);

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
              className="fas fa-window-close close-icon"
              onClick={() => {
                searchValueToContext.setSearchBy("");
                searchValueToContext.setSearchText("");
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
