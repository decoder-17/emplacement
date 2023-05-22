import { React, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../assets/css/navbar.css";
import logo from "/logo.png";
import darktheme from "../../assets/images/dark-theme.svg";
import lighttheme from "../../assets/images/light-mode.svg";
import { ThemeContext } from "../../App";
import { RxAvatar } from "react-icons/rx";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [status, setstatus] = useState("Sign In");
  const [user] = useAuthState(auth);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [loginVisible, setloginVisible] = useState(false);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/Jobs");
    setstatus("Sign Out");
  };

  const signUserOut = async () => {
    await signOut(auth);
    navigate("/");
    setstatus("Sign In");
  };

  return (
    <div className={theme ? "dark" : ""}>
      <div
        className="flex flex-row justify-between items-center bg-[#FFFFFF] text-black dark:text-[#c0bdc1] dark:bg-[#202528] p-2 sticky top-0"
        role="navigation"
      >
        <div className="brand">
          <div className="flex flex-row justify-center items-center">
            <img src={logo} alt="logo" className="logo" />
            <div className="text-black dark:text-[#c0bdc1]">
              <Link to={`/`}>emplacement</Link>
            </div>
          </div>
        </div>
        <div className=" text-black dark:text-[#fafafc]">
          <ul className="nav">
            <li className={splitLocation[1] === "" ? "active" : " "}>
              <Link
                to={`/`}
                className="text-black hover:text-[#a30cfd] dark:text-[#fafafc] dark:hover:text-[#a30cfd]"
              >
                Home
              </Link>
            </li>
            <li className={splitLocation[1] === "Jobs" ? "active" : ""}>
              <Link
                to={"/Jobs"}
                className="text-black hover:text-[#a30cfd] dark:text-[#fafafc] dark:hover:text-[#a30cfd]"
              >
                Jobs
              </Link>
            </li>
            <li className={splitLocation[1] === "Telegram" ? "active" : ""}>
              <Link
                to={`/Telegram`}
                className="text-black hover:text-[#a30cfd] dark:text-[#fafafc] dark:hover:text-[#a30cfd]"
              >
                Telegram
              </Link>
            </li>
            <li className={splitLocation[1] === "About" ? "active" : ""}>
              <Link
                to={`/About`}
                className="text-black hover:text-[#a30cfd] dark:text-[#fafafc] dark:hover:text-[#a30cfd]"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="right flex gap-4 items-center flex-row justify-center">
          <div className="changemode p-2">
            {" "}
            <img
              src={theme ? darktheme : lighttheme}
              alt="dark-theme"
              className="h-8 w-auto"
              onClick={() => {
                toggleTheme();
              }}
            ></img>{" "}
          </div>
          <div className="signin p-2">
            {user ? (
              <img
                src={user?.photoURL}
                width="38"
                height="38"
                className="rounded-full object-cover"
                onClick={() => {
                  setloginVisible((curr) => (curr === false ? true : false));
                }}
              />
            ) : (
              <RxAvatar
                size={32}
                className="text-black dark:text-[#c0bdc1]"
                onClick={() => {
                  setloginVisible((curr) => (curr === false ? true : false));
                }}
              />
            )}

            {loginVisible && (
              <div
                className={loginVisible ? "signin-menu show" : "signin-menu"}
              >
                <div className="user-details">
                  <div className="user-email">{user?.email}</div>
                  <div className="user-name">{user?.displayName}</div>
                </div>
                <button
                  className="text-[#7d8da1] dark:text-[#c0bdc1] rounded-full button flex py-2 mx-2 w-32 text-center justify-center hover:text-[#fafafc]"
                  onClick={user ? signUserOut : signIn}
                >
                  {user ? "Sign Out" : "Sign In"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
