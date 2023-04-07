import { React, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"
import '../../assets/css/navbar.css'
import logo from '/logo.png'

export const Navbar = () => {

  const navigate = useNavigate();
  const [status, setstatus] = useState("Sign In")
  const [user] = useAuthState(auth);
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate('/Jobs');
    setstatus("Sign Out");
  }


  const signUserOut = async () => {
    await signOut(auth);
    navigate('/');
    setstatus("Sign In");
  }

  return (
    <div className="navbar">
      <div className="brand">
        <div className="logospace">
          <img src={logo} alt="logo" className="logo" />
          <div className="brandname"><Link to={`/`} >emplacement</Link></div>
        </div>

      </div>
      <div className="nav">
        <ul>
          <li> <Link to={`/`} className="navmenu">Home</Link> </li>
          <li><Link to={'/Jobs'} className="navmenu">Jobs</Link></li>
          <li> <Link to={`/Telegram`} className="navmenu">Telegram</Link></li>
          <li><Link to={`/About`} className="navmenu">About Us</Link></li>
        </ul>
      </div>
      <div className="sigin">
        <button type="button" className="text-[#c0bdc1] rounded-full hover:text-[#fafafc]" onClick={signIn}>{status}</button>
      </div>
    </div>
  );
};
