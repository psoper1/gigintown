import { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import GigInTownLogo from "../imgs/gigintown test3.png";

function Login() {
  // Define email and password as local state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/api/api/token/", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        console.log("Logged in");
        // Redirect to a protected route or perform other actions
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login failure, show an error message, etc.
      });
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
                <div className="card-body signup-card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
                    Login
                  </h3>
                  <form className="px-md-2">
                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg inputField"
                        name="email"
                        value={email} // Use email state
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg inputField"
                        name="password"
                        value={password} // Use password state
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                      />

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-info btn-lg"
                          type="button" // Change this to 'submit' if you wrap the form in a <form>
                          onClick={handleLogin}
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;