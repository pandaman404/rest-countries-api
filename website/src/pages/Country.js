import React from "react";
import Header from "../components/Header";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import useFetch from "../hooks/useFetch";

const Country = () => {
  const { code } = useParams();
  const { isLoading, error, countries: country } = useFetch(`alpha/${code}`);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="loading"></div>
      </>
    );
  }

  if (error.show || !country.name) {
    return (
      <>
        <Header />
        <section className="wrapper notfound-container">
          Not Found!
          <BackButton />
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="detail-content">
        <div className="wrapper">
          <BackButton />
          <div className="country">
            <img
              src={country.flags ? country.flags.svg : null}
              alt={country.name}
              className="country-img"
            />
            <div className="country-info">
              <h2>{country.name}</h2>
              <ul className="info-1">
                <li>
                  <span className="li-title">Native Name: </span>
                  {country.nativeName}
                </li>
                <li>
                  <span className="li-title">Population: </span>
                  {new Intl.NumberFormat("en-US").format(country.population)}
                </li>
                <li>
                  <span className="li-title">Region: </span>
                  {country.region}
                </li>
                <li>
                  <span className="li-title">Sub Region: </span>
                  {country.subregion}
                </li>
                <li>
                  <span className="li-title">Capital: </span>
                  {country.capital}
                </li>
              </ul>
              <ul className="info-2">
                <li>
                  <span className="li-title">Top Level Domain: </span>
                  {country.topLevelDomain}
                </li>
                <li>
                  <span className="li-title">Currencies: </span>
                  {country.currencies.map((item, index) => {
                    return (
                      <span key={index}>{(index ? ", " : "") + item.name}</span>
                    );
                  })}
                </li>
                <li>
                  <span className="li-title">Languages: </span>
                  {country.languages.map((item, index) => {
                    return (
                      <span key={index}>{(index ? ", " : "") + item.name}</span>
                    );
                  })}
                </li>
              </ul>
              <div className="border-countries">
                <h3>Border Countries:</h3>
                <div className="buttons-container">
                  {country.borders
                    ? country.bordersNames.map((item, index) => {
                        return (
                          <Link
                            key={country.borders[index]}
                            to={`/country/${country.borders[
                              index
                            ].toLowerCase()}`}
                          >
                            <button>
                              <span className="text-button">{item}</span>
                            </button>
                          </Link>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
