import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import axios from 'axios';

function HomePage({ user }) {
  // State to manage form data
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

  // Function to handle input changes and update form data
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Replace the URL with your actual backend endpoint
      const response = await axios.post('http://localhost:8000/api/events/', {
        title: formData.title,
        flyer: formData.flyer,
        description: formData.description,
        artists: formData.artists,
        date: formData.date,
        time: formData.time,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        venue: formData.venue,
        price: formData.price,
        isAllAges: formData.isAllAges,
      });
  
      // Handle the response here (e.g., show a success message, redirect, etc.)
      console.log('Event submitted successfully!', response.data);
  
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error('Error submitting event:', error);
    }
    console.log(formData)
  };

  return (
    <>
      <Nav user={user} />
      <div className="logo-container">
        <Logo />
      </div>

      {/* {Form Container} */}
      <div className="form-container">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Title input */}
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Flyer input */}
          <label>
            Flyer:
            <input
              type="text"
              name="flyer"
              value={formData.flyer}
              onChange={handleInputChange}
            />
          </label>

          {/* Description textarea */}
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Artists input */}
          <label>
            Artists:
            <input
              type="text"
              name="artists"
              value={formData.artists}
              onChange={handleInputChange}
            />
          </label>

          {/* Date input */}
          <label>
            Date (mm/dd/yyyy):
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Time input */}
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Address input */}
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>

          {/* City input */}
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </label>

          {/* State input */}
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
          </label>

          {/* ZipCode input */}
          <label>
            ZipCode:
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </label>

          {/* Venue input */}
          <label>
            Venue:
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
            />
          </label>

          {/* Price input */}
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>

          {/* IsAllAges checkbox */}
          <label>
            Is All Ages:
            <input
              type="checkbox"
              name="isAllAges"
              checked={formData.isAllAges}
              onChange={handleInputChange}
            />
          </label>

          {/* Genre dropdown */}
          {/* <label>
            Genre:
            <select name="genre" value={formData.genre} onChange={handleInputChange}>
              <option value="">Select Genre</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              {/* Add more options as needed */}
          {/* </select>
          </label> */}

          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
