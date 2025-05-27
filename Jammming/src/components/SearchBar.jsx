import React, { useState } from "react";
import '../App.css'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter A Song, Album, or Artist"
        className="input-style"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="button-style">SEARCH</button>
    </form>
  );
}

export default SearchBar;