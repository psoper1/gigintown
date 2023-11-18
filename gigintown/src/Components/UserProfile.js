import React, { useState, useEffect, useRef } from "react";
import Api from "./Api";
import Nav from "./Nav";

const UserProfile = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const prevLoggedInUser = useRef(loggedInUser);

  useEffect(() => {
    console.log("Event GET running");

    const fetchData = async () => {
      try {
        if (loggedInUser.email) {
          const response = await Api.get(
            "http://localhost:8000/api/get-saved-events/"
          );
          setSavedEvents(response.data);
          console.log(response);
        }
      } catch (error) {
        console.error("Error fetching saved events:", error);
      }
    };

    fetchData();
    prevLoggedInUser.current = loggedInUser;
    // eslint-disable-next-line
  }, []);

  const handleRemoveFromFavorites = async (eventId) => {
    try {
      const response = await Api.delete(`/save-event/${eventId}/`);
      setSavedEvents(savedEvents.filter((event) => event.EventID !== eventId));
      console.log(response);
      const updatedUser = {
        ...loggedInUser,
        saved_events: loggedInUser.saved_events.filter(
          (event) => event.EventID !== eventId
        ),
      };
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Error removing event from favorites:", error);
    }
  };

  return (
    <div>
      <Nav loggedInUser={loggedInUser} />
      {loggedInUser && (
        <>
          <h1>{loggedInUser.email}</h1>
          <h2>Saved Events</h2>
          {savedEvents.map((event) => (
            <div key={event.EventID}>
              <h2>{event.Title}</h2>
              <img src={event.Flyer} alt="test" />
              <button onClick={() => handleRemoveFromFavorites(event.EventID)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default UserProfile;
