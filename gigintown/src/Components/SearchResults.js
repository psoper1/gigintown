import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  saveResultsToLocalStorage,
  loadResultsFromLocalStorage,
  clearResultsFromLocalStorage,
} from "./localStorageUtils";
// import axios from "axios";
// import { getCSRFToken } from "./CSRF";


function SearchResults({ searchResults, setSearchResults, setSelectedEvent, loggedInUser, setLoggedInUser }) {
  useEffect(() => {
    const storedResults = loadResultsFromLocalStorage();
    if (storedResults) {
      setSearchResults(storedResults);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    saveResultsToLocalStorage(searchResults);
  }, [searchResults]);

  useEffect(() => {
    window.addEventListener("beforeunload", clearResultsFromLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearResultsFromLocalStorage);
    };
  }, []);

  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":");
    let amPM = "AM";
    let hour = parseInt(hours, 10);

    if (hour >= 12) {
      amPM = "PM";
      if (hour > 12) {
        hour -= 12;
      }
    }

    return `${hour}:${minutes} ${amPM}`;
  }

  function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + " ...";
    }
    return description;
  }

  const handleEventSelection = (event) => {
    setSelectedEvent(event);
  };

  // const handleAddToFavorites = async (event) => {
  //   // Check if loggedInUser is defined
  //   if (!loggedInUser) {
  //     console.error("User is not logged in.");
  //     return;
  //   }
  
  //   // Check if the event is already saved
  //   const isEventSaved = loggedInUser.saved_events && loggedInUser.saved_events.some(savedEvent => savedEvent.EventID === event.EventID);
  
  //   if (!isEventSaved) {
  //     // Get CSRF token
  //     const csrfToken = await getCSRFToken();
  //     axios.defaults.headers.post['X-CSRFToken'] = csrfToken;
  
  //     // Send a POST request to save the event
  //     axios.post(`http://localhost:8000/api/save-event/${event.EventID}/`)
  //       .then(response => {
  //         // Update the local loggedInUser object
  //         const updatedUser = { ...loggedInUser, saved_events: [...(loggedInUser.saved_events || []), event] };
  //         setLoggedInUser(updatedUser);
  //       })
  //       .catch(error => {
  //         console.error("Error saving event:", error);
  //       });
  //   }
  // };

  return (
    <div className="row">
      {searchResults.map((event) => (
        <div className="col-md-6" key={event.EventID}>
          <div className="card mb-4 main-card">
            <div className="d-flex text-white">
              <img
                className="card-img-left flyer-img"
                src={event.Flyer}
                alt="flyer"
                onClick={() => handleEventSelection(event)}
              />
              <div className="card-body">
                <h5 className="card-title">{event.Title}</h5>
                <p className="card-text">
                  {truncateDescription(event.Description, 75)}
                </p>
                <p className="card-text">{event.Artists}</p>
                <p className="card-text">{event.Data}</p>
                <p className="card-text">{convertTo12HourFormat(event.Time)}</p>
                <p className="card-text">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${event.Address} ${event.City}, ${event.State} ${event.ZipCode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.Address} {event.City}, {event.State} {event.ZipCode}
                  </a>
                </p>
                {event.Link && (
                  <p className="card-text">
                    Event Link:{" "}
                    <a
                      href={event.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {event.Link}
                    </a>
                  </p>
                )}
                <Link
                  to="/selected-event"
                  onClick={() => handleEventSelection(event)}
                >
                  View Full Event Info
                </Link>
                {/* <button onClick={() => handleAddToFavorites(event)}>Add to favorites</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
