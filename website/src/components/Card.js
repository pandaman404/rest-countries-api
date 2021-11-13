import React from "react";

const Card = () => {
  return (
    <article className="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png"
        alt="chile"
        className="card-img"
      />
      <h2>United States of America</h2>
      <ul>
        <li>
          <span className="li-title">Population:</span> 17.000.000
        </li>
        <li>
          <span className="li-title">Region:</span> Americas
        </li>
        <li>
          <span className="li-title">Capital:</span> Santiago
        </li>
      </ul>
    </article>
  );
};

export default Card;
