import React from "react";
import { Outlet, Link } from 'react-router-dom'
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
          <li> <Link to={`/`}>Home</Link> </li>
          <li><Link to={'/Jobs'}>Jobs</Link></li>
          <li> <Link to={`/Telegram`}>Telegram</Link></li>
          <li><Link to={`/About`}>About Us</Link></li>
          <li><Link to={`/Contact`}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="sigin">
        <button type="button" className="button">Sign In</button>
      </div>
    </div>
  );
};
