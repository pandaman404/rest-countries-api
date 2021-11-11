import React from "react";
import { useGlobalContext } from "./context";

function App() {
  const value = useGlobalContext();
  return <h1>{value}</h1>;
}

export default App;
