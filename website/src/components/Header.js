import React, { useState, useEffect } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="wrapper">
        <h1>Where in the world?</h1>
        <span className="dark-mode" onClick={toggleTheme}>
          {theme === "light-theme" ? <IoMoonOutline /> : <IoMoonSharp />}
          Dark Mode
        </span>
      </div>
    </header>
  );
};

export default Header;
