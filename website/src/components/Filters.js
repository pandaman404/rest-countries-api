import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useGlobalContext } from "../context";

const Filters = () => {
  const { setQuery } = useGlobalContext();

  const handleFilters = (e) => {
    setQuery(`region/${e.target.value}`);
  };

  return (
    <div className="filters">
      <MdKeyboardArrowDown />
      <select name="" defaultValue="default" onChange={handleFilters}>
        <option value="default" disabled hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filters;
