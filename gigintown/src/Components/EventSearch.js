import React, { useState } from "react";
import StateOptions from "./StateOptions";

function EventSearch({ onSearch }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSearch = () => {
    onSearch(city, state);
  };

  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <StateOptions />
      </select>
      <button onClick={handleSearch} disabled={!city && !state}>
        Search
      </button>
    </div>
  );
}

export default EventSearch;
