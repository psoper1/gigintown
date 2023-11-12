import { useState } from "react";
import Nav from "./Nav";
import GigInTownLogo from "../imgs/gigintown test3.png";
import GeneralAccount from "./GeneralAccount";
import { Link } from "react-router-dom";

function Signup({ user, setUser }) {
  const [accountType, setAccountType] = useState("");
  const [formData, setFormData] = useState({
    artistName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully.");
        setFormData({
          artistName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
        });
      } else {
        console.error("Email sending failed.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Artist") {
      setAccountType("Artist");
    } else if (selectedValue === "Venue") {
      setAccountType("Venue");
    } else if (selectedValue === "Promoter") {
      setAccountType("Promoter");
    } else if (selectedValue === "General User") {
      setAccountType("General User");
    }
  };

  return (
    <>
      <Nav />
      <section className="h-100 h-custom section-signup">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  className="signup-image"
                  src={GigInTownLogo}
                  alt="Sample"
                />
                <div className="dropdown-question">
                  <div className="text-center text-white">
                    Please choose the type of account you would like to create
                  </div>
                  <div className="mb-4 dropdown-options-venue">
                    <select
                      className="select dropdown-box-venue"
                      onChange={handleDropdownChange}
                    >
                      <option value=""></option>
                      <option value="Artist">Artist</option>
                      <option value="Venue">Venue</option>
                      <option value="Promoter">Promoter</option>
                      <option value="General User">General User</option>
                    </select>
                  </div>
                </div>
                {(accountType === "Artist" ||
                  accountType === "Venue" ||
                  accountType === "Promoter") && (
                  <>
                    <div>
                      {accountType} accounts require additional verification.
                      This is to keep any user from creating accounts for your
                      business or brand.
                    </div>
                    <p>
                      Please submit the form below. For questions regarding how
                      the verification process works and how long it takes,
                      please use this link.
                    </p>
                    <p>For more information on the different types of accounts, see the <Link to="/faq">FAQ</Link></p>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="artistName"
                        placeholder={`${accountType} Name (Subject)`}
                        value={formData.artistName}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <button type="submit">Send Email</button>
                    </form>
                  </>
                )}
                {accountType === "General User" && (
                  <>
                  <div>Note: General Accounts are unable to Create Events. If you are representing an Artist, Venue or are a Promoter please choose from the dropdown above.</div>
                  <div>For more information on the different types of accounts, see the <Link to="/faq">FAQ</Link></div>
                  <GeneralAccount
                    user={user}
                    setUser={setUser}
                    accountType={accountType}
                  />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
