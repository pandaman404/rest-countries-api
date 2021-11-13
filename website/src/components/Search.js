import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Search for a country..." />
      <MdSearch />
    </form>
  );
};

export default Search;
