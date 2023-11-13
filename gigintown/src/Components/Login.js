import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import GigInTownLogo from "../imgs/gigintown test3.png";

function Login({ setLoggedInUser, loggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (userLoading) {
      const data = {
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        brandName: loggedInUser.brandName,
        userAccountType: loggedInUser.userAccountType
      };
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      setUserLoading(false);
    }
  }, [loggedInUser, userLoading]);

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/api/api/custom-login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        const updatedUser = {
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          brandName: response.data.brand_name,
          userAccountType: response.data.account_type,
        };
        setLoggedInUser(updatedUser);
        setUserLoading(true);
        console.log(updatedUser);
      })
      .catch((error) => {
        setError("Login failed. Please check your email and password.");
        console.error("Login failed:", error);
      });
  };

  return (
    <>
      <Nav loggedInUser={loggedInUser} />
      <section className="h-100 h-custom section-signup">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img className="signup-image" src={GigInTownLogo} alt="Sample" />
                <div className="card-body signup-card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Login</h3>
                  <form className="px-md-2">
                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg inputField"
                        name="email"
                        value={email}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                      />

                      {error && <div className="text-danger mb-3">{error}</div>}

                      <div className="pt-1 mb-4">
                        <button className="btn btn-info btn-lg" type="button" onClick={handleLogin}>
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