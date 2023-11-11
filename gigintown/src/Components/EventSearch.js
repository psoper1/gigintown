import React, { useState } from "react";

function EventSearch({ onSearch }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSearch = () => {
    onSearch(city, state);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Select State</option>
        <option value="KY">Kentucky</option>
        <option value="OH">Ohio</option>
        {/* Add all 50 states here */}
      </select>
      <button onClick={handleSearch} disabled={!city}>Search</button>
    </div>
  );
}

export default EventSearch;