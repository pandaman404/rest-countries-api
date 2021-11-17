import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/" className="back">
      <BsArrowLeft /> Back
    </Link>
  );
};

export default BackButton;
