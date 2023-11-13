import axios from 'axios';
import { useState } from 'react';

function GeneralAccount({ user, setUser, accountType }) {
  const [error, setError] = useState(null);

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const csrfResponse = await axios.get('http://localhost:8000/api/get-csrf-token/');
      const csrfToken = csrfResponse.data.csrf_token;
      const headers = {
        'X-CSRFToken': csrfToken,
      };
      const response = await axios.post('http://localhost:8000/api/api/user/register/', user, { headers });
      console.log('Registered!', accountType);
      console.log(response.data);
      console.log(response)

      // Redirect the user to the login page or display a success message here.
    } catch (error) {
      setError(error.response.data.error);

      // Display an error message to the user.
      console.error('Registration error:', error);
    }
  };
console.log(user)
  return (
    <>
      <div className="card-body signup-card-body p-4 p-md-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
          Registration Info
        </h3>
        <form className="px-md-2">
          <div className="mb-4">
            <input
              type="text"
              id="first_name"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("first_name", e.target.value)}
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="last_name"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("last_name", e.target.value)}
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email Address"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="passConf"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("passwordConf", e.target.value)}
              placeholder="Confirm Password"
            />
          </div>

          {error && <div className="text-danger">{error}</div>}

          <button
            type="button"
            onClick={handleRegister}
            className="btn btn-success btn-lg mb-1"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default GeneralAccount;