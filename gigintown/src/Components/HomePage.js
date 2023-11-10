// import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
// import axios from 'axios';
import EventForm from "./EventForm";

function HomePage({ user }) {
  return (
    <>
      <Nav user={user} />
      <div className="logo-container">
        <Logo />
      </div>
    <EventForm />
    </>
  );
}

export default HomePage;
