import React from "react";
import { useParams, useHistory } from "react-router-dom";

import useFetch from "../hooks/fetch/useFetch";

import "./pokeDetails.css";

const PokeDetails = () => {
  const { name } = useParams();
  const history = useHistory();

  console.log(name, "::name");
  const { data, loading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  console.log(data);
  console.log(data && "hello");
  return (
    <div>
      {loading ? (
        `${name} details are loading...`
      ) : (
        <div>
          <section className="pokemon-details-heading">
            <h2>{name}</h2>

            <i
              className="fas fa-arrow-left back-icon"
              onClick={() => history.goBack()}
            ></i>
          </section>
          {data ? (
            <div className="pokemon-details-page">
              <ul>
                <h3>Abilities:</h3>
                {data.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
              <ul>
                <h3>game_indices:</h3>
                {data.game_indices.map((indices) => (
                  <li key={indices.version.name}>{indices.version.name}</li>
                ))}
              </ul>
              <ul>
                <h3>Moves:</h3>
                {data.moves.map((move) => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            "data not available"
          )}
        </div>
      )}
    </div>
  );
};

export default PokeDetails;
