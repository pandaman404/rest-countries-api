import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import useFetch from "../useFetch";

const Country = () => {
  const { code } = useParams();

  const { isLoading, error, countries } = useFetch(`alpha/${code}`);

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading"></div>
      ) : error.show ? (
        <h2>{error.msg}</h2>
      ) : (
        <section className="detail-content">
          <div className="wrapper">
            <BackButton />
            <div className="country">
              <img
                src={countries.flags.svg}
                alt={countries.name}
                className="country-img"
              />
              <div className="country-info">
                <h2>{countries.name}</h2>
                <ul className="info-1">
                  <li>
                    <span className="li-title">Native Name: </span>
                    {countries.nativeName}
                  </li>
                  <li>
                    <span className="li-title">Population: </span>
                    {countries.population}
                  </li>
                  <li>
                    <span className="li-title">Region: </span>
                    {countries.region}
                  </li>
                  <li>
                    <span className="li-title">Sub Region: </span>
                    {countries.subregion}
                  </li>
                  <li>
                    <span className="li-title">Capital: </span>
                    {countries.capital}
                  </li>
                </ul>
                <ul className="info-2">
                  <li>
                    <span className="li-title">Top Level Domain: </span>
                    {countries.domain}
                  </li>
                  <li>
                    <span className="li-title">Currencies: </span>
                    {countries.currencies.map((item, index) => {
                      return (
                        <span key={index}>
                          {(index ? ", " : "") + item.name}
                        </span>
                      );
                    })}
                  </li>
                  <li>
                    <span className="li-title">Languages: </span>
                    {countries.languages.map((item, index) => {
                      return (
                        <span key={index}>
                          {(index ? ", " : "") + item.name}
                        </span>
                      );
                    })}
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
      )}
    </>
  );
};

export default Country;
