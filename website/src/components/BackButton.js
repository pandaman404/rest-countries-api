import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <button className="back">
        <BsArrowLeft /> Back
      </button>
    </Link>
  );
};

export default BackButton;
