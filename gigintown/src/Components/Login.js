import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import GigInTownLogo from "../imgs/gigintown test3.png";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedInUser, loggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/obtain/', {
        email,
        password,
      });
  
      console.log('Login Response:', response.data);
  
      const authToken = response.data.access;
  
      const userDetailsResponse = await axios.get('http://localhost:8000/api/user/details/', {
        headers: {
          Authorization: `JWT ${authToken}`,
        },
      });
  
      const userDetails = userDetailsResponse.data;
      console.log(userDetails)
  
      localStorage.setItem('authToken', authToken);
      // console.log('Auth Token is: ', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      // console.log('Refresh Token is: ', response.data.refresh);
      localStorage.setItem('loggedInUser', JSON.stringify(userDetails));
  
      setLoggedInUser(true);
    } catch (error) {
      setError('Login failed. Please check your email and password.');
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
        const timer = setTimeout(() => {
            navigate('/');
            window.location.reload();
            // location.reload(true)
        }, 0);
        return () => clearTimeout(timer);
    }
}, [navigate, loggedInUser]);

  return (
    <>
      <Nav loggedInUser={loggedInUser} />
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
                        <button
                          className="btn btn-info btn-lg"
                          type="button"
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
