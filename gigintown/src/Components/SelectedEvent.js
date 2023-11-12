import Nav from "./Nav";

function SelectedEvent({selectedEvent}) {

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
        <>
        <Nav />
        <div className="col-md-6" key={selectedEvent.EventID}>
          <div className="card mb-4 main-card">
            <div className="d-flex text-white">
                <img
                  className="card-img-left flyer-img"
                  src={selectedEvent.Flyer}
                  alt="flyer"
                />
              <div className="card-body">
                <h5 className="card-title">{selectedEvent.Title}</h5>
                <p className="card-text">
                  {selectedEvent.Description}
                </p>
                <p className="card-text">{selectedEvent.Artists}</p>
                <p className="card-text">{selectedEvent.Data}</p>
                <p className="card-text">{convertTo12HourFormat(selectedEvent.Time)}</p>
                <p className="card-text">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${selectedEvent.Address} ${selectedEvent.City}, ${selectedEvent.State} ${selectedEvent.ZipCode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedEvent.Address} {selectedEvent.City}, {selectedEvent.State} {selectedEvent.ZipCode}
                  </a>
                </p>
                {selectedEvent.Link && (
                  <p className="card-text">
                    Event Link:{" "}
                    <a
                      href={selectedEvent.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedEvent.Link}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default SelectedEvent;