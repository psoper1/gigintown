import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

function UserProfile({ loggedInUser }) {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    // Fetch saved events for the logged-in user
    if (loggedInUser && loggedInUser.saved_events) {
      const eventIDs = loggedInUser.saved_events.map(event => event.EventID);
      axios.get(`http://localhost:8000/api/saved-events/?event_ids=${eventIDs.join(',')}`)
        .then(response => {
          setSavedEvents(response.data);
        })
        .catch(error => {
          console.error("Error fetching saved events:", error);
        });
    }
  }, [loggedInUser]);

  return (
    <>
      <Nav loggedInUser={loggedInUser} />
      <div className="text-center">{loggedInUser.firstName}</div>
      <div>
        <h2>Saved Events:</h2>
        <ul>
          {savedEvents.map(savedEvent => (
            <li key={savedEvent.EventID}>{savedEvent.Title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserProfile;