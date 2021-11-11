import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.css";
import App from "./app";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);