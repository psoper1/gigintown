import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import axios from "axios";
import EventSearch from "./EventSearch";
import SearchResults from "./SearchResults";

function HomePage({ user, setSelectedEvent }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (city, state) => {
    axios
      .get("http://localhost:8000/api/api/events/search/", {
        params: {
          City: city,
          State: state,
        },
      })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error while fetching data:", error);
      });
  };

  return (
    <>
      <Nav user={user} />
      <div className="logo-container">
        <Logo />
      </div>
      <EventSearch onSearch={handleSearch} />
      <div className="container results-container">
        <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} setSelectedEvent={setSelectedEvent} />
      </div>
    </>
  );
}

export default HomePage;
