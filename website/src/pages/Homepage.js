import React from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import Search from "../components/Search";
import Filters from "../components/Filters";
import Card from "../components/Card";

const Homepage = () => {
  const { countries, isLoading, error } = useGlobalContext();

  return (
    <>
      <Header />
      <main className="homepage-content">
        <div className="wrapper">
          <Search />
          <Filters />
          <div className="cards-container">
            {isLoading ? (
              <div className="loading"></div>
            ) : error.show ? (
              <h2>{error.msg}</h2>
            ) : (
              countries.map((country) => {
                return <Card key={country.name} {...country} />;
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
