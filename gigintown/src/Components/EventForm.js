import axios from "axios";
import { useState } from "react";
import Nav from "./Nav";

function EventForm({user}) {
  const [formData, setFormData] = useState({
    title: "",
    flyer: "",
    description: "",
    artists: "",
    date: "",
    time: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    venue: "",
    price: "",
    isAllAges: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        Title: formData.title,
        Flyer: formData.flyer,
        Description: formData.description,
        Artists: formData.artists,
        Date: formData.date,
        Time: formData.time,
        Address: formData.address,
        City: formData.city,
        State: formData.state,
        ZipCode: formData.zipCode,
        Venue: formData.venue,
        Price: formData.price,
        IsAllAges: formData.isAllAges,
      };
      console.log(requestData)

      const options = {
        url: "http://localhost:8000/api/events/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: requestData,
      };

      const response = await axios(options);

      console.log("Event submitted successfully!", response.data);
    } catch (error) {
      console.error("Error submitting event:", error);
    }
    console.log(formData);
  };

  return (
    <>
    <Nav user={user} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-white">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Flyer:</label>
                <input
                  type="text"
                  name="flyer"
                  value={formData.flyer}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Artists: (Separate Artists by Comma)</label>
                <input
                  type="text"
                  name="artists"
                  value={formData.artists}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Date (mm/dd/yyyy):</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Time:</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">
                  Check this box if this if all ages are welcome:{" "}
                </label>
                <input
                  type="checkbox"
                  name="isAllAges"
                  checked={formData.isAllAges}
                  onChange={handleInputChange}
                  className="form-check-input"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-white">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">City:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">State:</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">ZipCode:</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Venue:</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="text-white">Price:</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventForm;
