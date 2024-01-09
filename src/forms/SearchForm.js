import React, { useState } from "react";
import "./SearchForm.css";

/** Form for searching via name of companies or jobs
 */

const SearchForm = ({ searchItems }) => {
  const INITIAL_STATE = { searchTerm: "" };
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchItems(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setSearchTerm(value);
  };

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <input
        id="term"
        name="term"
        value={searchTerm}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;