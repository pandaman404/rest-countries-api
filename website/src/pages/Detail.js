import React from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

const Detail = () => {
  return (
    <>
      <Header />
      <section className="detail-content">
        <div className="wrapper">
          <BackButton />
          <div className="country">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1280px-Flag_of_Chile.svg.png"
              alt="jio"
              className="country-img"
            />
            <div className="country-info">
              <h2>Chile</h2>
              <ul className="info-1">
                <li>
                  <span className="li-title">Native Name:</span> Chile
                </li>
                <li>
                  <span className="li-title">Population:</span> 17.000.000
                </li>
                <li>
                  <span className="li-title">Region:</span> Americas
                </li>
                <li>
                  <span className="li-title">Sub Region:</span> South America
                </li>
                <li>
                  <span className="li-title">Capital:</span> Santiago
                </li>
              </ul>
              <ul className="info-2">
                <li>
                  <span className="li-title">Top Level Domain:</span> .cl
                </li>
                <li>
                  <span className="li-title">Currencies:</span> Peso
                </li>
                <li>
                  <span className="li-title">Language:</span> Spanish, English
                </li>
              </ul>
              <div className="border-countries">
                <h3>Border Countries:</h3>
                <div className="buttons-container">
                  <button>Argentina</button>
                  <button>Bolivia</button>
                  <button>Peru</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
