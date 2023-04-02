import { React, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"
import '../../assets/css/navbar.css'
import logo from '../../assets/images/logo.png'

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
          <div className="brandname">emplacement</div>
        </div>

      </div>
      <div className="nav">
        <ul>
          <li> <Link to={`/`}>Home</Link> </li>
          <li><Link to={'/Jobs'}>Jobs</Link></li>
          <li> <Link to={`/Telegram`}>Telegram</Link></li>
          <li><Link to={`/About`}>About Us</Link></li>
        </ul>
      </div>
      <div className="sigin">
        <button type="button" className="button" onClick={signIn}>{status}</button>
      </div>
    </div>
  );
};
