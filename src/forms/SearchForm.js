import React, { useState } from "react";

/** Form for searching via name of companies or jobs
 */

const SeatchForm = (term, searchItems) => {
  const INITIAL_STATE = { term: "" };
  const [searchTerm, setSearchTerm] = useState('');

  /** Submit form and search for companies */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchItems(searchTerm);
    setSearchTerm('');
  };

  /** Update form fields */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="term"
        name="term"
        value={formData.term}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default SeatchForm;