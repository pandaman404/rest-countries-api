import React from "react";

const Card = ({ flags, name, population, region, capital }) => {
  return (
    <article className="card">
      <img src={flags.svg} alt={name} className="card-img" />
      <h2>{name}</h2>
      <ul>
        <li>
          <span className="li-title">Population:</span>{" "}
          {new Intl.NumberFormat("en-US").format(population)}
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
