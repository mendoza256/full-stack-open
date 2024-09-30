import React from "react";

export const Search = ({ search, setSearch }) => {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <form>
      <label htmlFor="countryName">Find Countries</label>
      <input
        name="countryName"
        type="text"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};
