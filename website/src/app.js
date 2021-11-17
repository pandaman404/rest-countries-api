import React from "react";
import { Homepage, Country, NotFound } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/rest-countries-api">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
