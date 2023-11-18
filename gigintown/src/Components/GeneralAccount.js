import axios from "axios";
import { useState } from "react";

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
      const response = await axios.post(
        "http://localhost:8000/api/user/create/",
        {
          email: user.email,
          password: user.password,
          account_type: user.account_type,
          first_name: user.firstName,
          last_name: user.lastName,
          address: user.address,
          city: user.city,
          state: user.state,
          zipCode: user.zipCode,
          businessName: user.businessName,
          website: user.busWebsite
        }
      );

      console.log("Registered!");
      console.log(response.data);

      // Handle successful registration, e.g., redirect the user to the login page possibly, or to a successful registration page
    } catch (error) {
      setError(error.response?.data?.error || "Registration error");
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <div className="card-body signup-card-body p-4 p-md-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
          Registration Info
        </h3>
        <form className="px-md-2">
          {/* Other form fields will be needed like password confirmation */}
          <div className="mb-4">
            <input
              type="firstName"
              id="firstName"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="lastName"
              id="lastName"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("lastName", e.target.value)}
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

          {accountType === "Venue" && (
            <>
              <div className="mb-4">
                <input
                  type="address"
                  id="address"
                  className="form-control form-control-lg inputField"
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Street Address"
                />
              </div>

              <div className="mb-4">
                <input
                  type="city"
                  id="city"
                  className="form-control form-control-lg inputField"
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="City"
                />
              </div>

              <div className="mb-4">
                <input
                  type="state"
                  id="state"
                  className="form-control form-control-lg inputField"
                  onChange={(e) => handleChange("state", e.target.value)}
                  placeholder="State"
                />
              </div>

              <div className="mb-4">
                <input
                  type="zipCode"
                  id="zipCode"
                  className="form-control form-control-lg inputField"
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  placeholder="Zip Code"
                />
              </div>

              <div className="mb-4">
                <input
                  type="businessName"
                  id="businessName"
                  className="form-control form-control-lg inputField"
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  placeholder="Business Name"
                />
              </div>
            </>
          )}

          {accountType === "Artist" && (
            <div className="mb-4">
              <input
                type="businessName"
                id="businessName"
                className="form-control form-control-lg inputField"
                onChange={(e) => handleChange("businessName", e.target.value)}
                placeholder="Artist / Band Name"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="busWebsite"
              id="busWebsite"
              className="form-control form-control-lg inputField"
              onChange={(e) => handleChange("busWebsite", e.target.value)}
              placeholder="Website (Optional)"
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
