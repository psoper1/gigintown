import React, { useState, useEffect, useRef } from 'react';
import Api from './Api';
import Nav from './Nav';

const UserProfile = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const prevLoggedInUser = useRef(loggedInUser);

  useEffect(() => {
    console.log("Event GET running");

    const fetchData = async () => {
      try {
        if (loggedInUser.email) {
          const response = await Api.get('http://localhost:8000/api/get-saved-events/');
          setSavedEvents(response.data);
          console.log(response);
        }
      } catch (error) {
        console.error("Error fetching saved events:", error);
      }
    };

    fetchData();
    prevLoggedInUser.current = loggedInUser; // Update the previous user
    // eslint-disable-next-line
  }, []); 

  return (
    <div>
      <Nav loggedInUser={loggedInUser} />
      {loggedInUser && (
        <>
          <h1>{loggedInUser.email}</h1>
          <h2>Saved Events</h2>
          <ul>
            {savedEvents.map((event) => (
              <>
              <li key={event.EventID}>{event.Title}</li>
              <img src={event.Flyer} alt='test'/>
              </>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserProfile;