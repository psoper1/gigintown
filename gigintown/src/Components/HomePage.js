import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import axios from "axios";
import EventSearch from "./EventSearch";
import SearchResults from "./SearchResults";
// import { getCSRFToken } from "./CSRF";

function HomePage({ user, setSelectedEvent, loggedInUser, setLoggedInUser }) {
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

  // const checkAuthentication = async () => {
  //   try {
  //     const csrfToken = await getCSRFToken();
  //     axios.defaults.headers.common["X-CSRFToken"] = csrfToken;
  
  //     // Retrieve the authentication token from local storage
  //     const authToken = localStorage.getItem("authToken");
  
  //     if (authToken) {
  //       // Include the authentication token in the headers
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
  //     } else {
  //       console.log("User is not authenticated.");
  //       return;
  //     }
  
  //     const response = await axios.get("http://localhost:8000/api/api/user/details/");
  
  //     if (response.status === 200) {
  //       console.log("User is authenticated:", response.data);
  //     } else {
  //       console.log("User is not authenticated.");
  //     }
  //   } catch (error) {
  //     console.error("Error checking authentication:", error);
  //     console.log("User is not authenticated.");
  //   }
  // };

  return (
    <>
      <Nav user={user} loggedInUser={loggedInUser} />
      <div className="logo-container">
        <Logo />
      </div>
      <EventSearch onSearch={handleSearch} />
      <div className="container results-container">
        <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} setSelectedEvent={setSelectedEvent} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      </div>
      {/* <button onClick={() => checkAuthentication()}>Check Auth</button> */}
    </>
  );
}

export default HomePage;
