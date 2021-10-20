import React from "react";
import { NavLink } from "react-router-dom";
import "./cards.css";

const Card = ({ data }) => {
  return (
    <NavLink to={`/pokemon/${data.name}`} className="card-Link" key={data.id}>
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
  );
};

export default Card;
