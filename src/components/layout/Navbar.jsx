import React from "react";
import '../../assets/css/navbar.css'
import logo from '../../assets/images/logo.png'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="logospace">
          <img src={logo} alt="logo" className="logo" />
          <div className="brandname">emplacement</div>
        </div>

      </div>
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
