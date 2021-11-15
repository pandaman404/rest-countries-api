import React, { useRef } from "react";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context";

const Search = () => {
  const searchValue = useRef("");
  const { setQuery } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(`name/${searchValue.current.value}`);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
        ref={searchValue}
      />
      <MdSearch />
    </form>
  );
};

export default Search;
