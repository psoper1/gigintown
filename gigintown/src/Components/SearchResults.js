function SearchResults({ searchResults }) {
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
              />
              <div className="card-body">
                <h5 className="card-title">{event.Title}</h5>
                <p className="card-text">{event.Description}</p>
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
