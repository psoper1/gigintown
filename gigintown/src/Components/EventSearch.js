import React, { useState } from "react";
import StateOptions from "./StateOptions";

function EventSearch({ onSearch }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSearch = () => {
    onSearch(city, state);
  };

  return (
    <div className="dropdown-state d-flex justify-content-center">
      <input
        className="input-search"
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <select
        className="form-select form-select-sm mb-3 select-state-box"
        aria-label="Large select example"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <StateOptions />
      </select>
      <button
        className="btn btn-secondary h-30 search-button"
        onClick={handleSearch}
        disabled={!city && !state}
      >
        Search
      </button>
    </div>
  );
}

export default EventSearch;
