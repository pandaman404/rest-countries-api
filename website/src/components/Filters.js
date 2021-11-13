import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filters = () => {
  return (
    <div className="filters">
      <MdKeyboardArrowDown />
      <select name="" defaultValue="default">
        <option value="default" disabled hidden>
          Filter by Region
        </option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </div>
  );
};

export default Filters;
