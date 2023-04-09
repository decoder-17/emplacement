import { React, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"
import '../../assets/css/navbar.css'
import logo from '/logo.png'
import darktheme from '../../assets/images/dark-theme.svg'
import lighttheme from '../../assets/images/light-mode.svg'
import { ThemeContext } from "../../App";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    <div className={theme ? 'dark' : ''}>
      <div className="navbar bg-gray-100 dark:bg-gray-950 text-black dark:text-[#c0bdc1]">
        <div className="brand">
          <div className="logospace">
            <img src={logo} alt="logo" className="logo" />
            <div className=" bg-gray-100 dark:bg-gray-950 text-black dark:text-[#c0bdc1]"><Link to={`/`} >emplacement</Link></div>
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
        <div className="changemode"> <img src={theme ? darktheme : lighttheme} alt="dark-theme" className="h-10 w-auto" onClick={() => { toggleTheme() }}></img> </div>
        <div className="sigin">
          <button className="text-[#c0bdc1] rounded-full button flex py-2 mx-2 w-32 text-center justify-center hover:text-[#fafafc]" onClick={signIn}>{status}</button>
        </div>
      </div>
    </div>
  );
};
