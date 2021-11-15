import React from "react";

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <article className="card">
      <img src={flag} alt={name} className="card-img" />
      <h2>{name}</h2>
      <ul>
        <li>
          <span className="li-title">Population:</span> {population}
        </li>
        <li>
          <span className="li-title">Region:</span> {region}
        </li>
        <li>
          <span className="li-title">Capital:</span> {capital}
        </li>
      </ul>
    </article>
  );
};

export default Card;
