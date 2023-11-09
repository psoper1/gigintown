import { useState } from "react";
import Nav from "./Nav";
import GigInTownLogo from "../imgs/gigintown test3.png";

function Login({ email, setEmail, password, setPassword }) {
  const handleLogin = () => {
    console.log("Logged in");
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
                  alt="Sample photo"
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email Address"
                      />

                      <label className="form-label" htmlFor="email"></label>
                    </div>

                    <div className="mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg inputField"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                      />

                      <label className="form-label" htmlFor="password"></label>
                      <div className="pt-1 mb-4">
                        <input
                          className="btn btn-info btn-lg"
                          type="submit"
                          value="Sign in"
                        />
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