import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Signup from "./Components/Signup";
import VenueVerification from "./Components/VenueVerification";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import EventForm from "./Components/EventForm";
import SelectedEvent from "./Components/SelectedEvent";
import FAQ from "./Components/FAQ";
import { GetLoggedInUserFromLocalStorage } from "./Components/GetLoggedInFromLocalStorage.js"
import UserProfile from "./Components/UserProfile.js";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    venueName: "",
    account_type: "",
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(GetLoggedInUserFromLocalStorage());

  useEffect(() => {
    setLoggedInUser(GetLoggedInUserFromLocalStorage());
  }, []); 

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HomePage user={user} setSelectedEvent={setSelectedEvent} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
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
                accountType={accountType}
                setAccountType={setAccountType}
              />
            }
          />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />} />
          <Route path="/venue-verification" element={<VenueVerification />} />
          <Route path="/event-form" element={<EventForm user={user} />} />
          <Route path="/selected-event" element={<SelectedEvent selectedEvent={selectedEvent} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/user-profile" element={<UserProfile loggedInUser={loggedInUser} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;