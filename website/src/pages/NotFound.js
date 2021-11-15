import React from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="wrapper notfound-container">
        Not Found!
        <BackButton />
      </section>
    </>
  );
};

export default NotFound;
