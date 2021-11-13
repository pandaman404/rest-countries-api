import React from "react";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import Search from "../components/Search";
import Filters from "../components/Filters";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="homepage-content">
        <div className="wrapper">
          <Search />
          <Filters />
          <div className="cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
