import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Signup from "./Components/Signup";
import VenueVerification from "./Components/VenueVerification";
import Login from "./Components/Login";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    venueName: "",
  });
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route
            path="/sign-up"
            element={
              <Signup
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/venue-verification" element={<VenueVerification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;