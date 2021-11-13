import React from "react";
import { useGlobalContext } from "../context";

const NotFound = () => {
  const value = useGlobalContext();
  return <h1>404 page</h1>;
};

export default NotFound;
