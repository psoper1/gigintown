import { NavLink, useNavigate } from "react-router-dom";
import gigIcon from "../imgs/gigintown-just-icon.png";

function Nav({ loggedInUser }) {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("loggedInUser")
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink to="/" className="nav-link">
            <img className="gigIcon" src={gigIcon} alt="gigIconIcon" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {loggedInUser && (
                <>
                  <li className="nav-item text-white">
                    Hello, {loggedInUser.first_name}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/user-profile" className="nav-link text-white">
                      Profile
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/faq" className="nav-link text-white">
                  FAQ
                </NavLink>
              </li>
              
                <li className="nav-item">
                  <NavLink to="/event-form" className="nav-link text-white">
                    Create Event
                  </NavLink>
                </li>
              {!loggedInUser && (
                <>
                  <li className="nav-item">
                    <NavLink to="/sign-up" className="nav-link text-white">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link text-white">
                      Log In
                    </NavLink>
                  </li>
                </>
              )}
              {loggedInUser && loggedInUser.firstName !== '' &&
                  <li className="nav-item">
                    <NavLink to="/user-profile" className="nav-link text-white">My Profile</NavLink>
                  </li>
              }
              {loggedInUser && loggedInUser.firstName !== '' &&
              <li className="nav-item">
              <button className="nav-link text-white" onClick={handleLogout}>Log Out</button>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
