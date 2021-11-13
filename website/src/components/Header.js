import React from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1>Where in the world?</h1>
        <span className="dark-mode">
          <IoMoonOutline />
          Dark Mode
        </span>
      </div>
    </header>
  );
};

export default Header;
