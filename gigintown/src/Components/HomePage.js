import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";
import axios from 'axios';
import EventSearch from "./EventSearch";

function HomePage({ user }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (city, state) => {
    axios.get('http://localhost:8000/api/api/events/search/', {
      params: {
        City: city,
        State: state,
      }
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
      <div className="text-center text-white">
        To create an Event, click <Link to="/event-form">HERE</Link>
      </div>
      <EventSearch onSearch={handleSearch} />
      <div>
        {searchResults.map((event) => (
          <div key={event.EventID}>
            <div>
            <div>Title: {event.Title}</div>
            <img className="h-75 w-25" src={event.Flyer} alt="flyer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;