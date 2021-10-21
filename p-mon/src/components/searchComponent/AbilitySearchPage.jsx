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
        `${searchby}/${searchtext} details are loading...`
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
              onClick={() => history.goBack()}
            ></i>
          </section>
          {data ? (
            <div className="search-page">
              {data.map((item) => (
                <Card data={item.data} />
                /*  <p>{item.data.height}</p> */
              ))}
            </div>
          ) : (
            "data not available"
          )}
        </div>
      )}
    </div>
  );
};

export default AbilitySearchPage;
