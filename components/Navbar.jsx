import React from "react";
import './css/navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">bleh</div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="sigin">
        <button type="button" className="button">Sign In</button>
      </div>
    </div>
  );
};
