import { React, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/hero.css";
import heroimg from "../../assets/images/heroimg.svg";
import { ThemeContext } from "../../App";

export const Hero = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="body flex flex-col sm:flex-row m-6 p-6 rounded-3xl bg-[#F6F6F9] dark:bg-[#181A1E]">
        <div className="text sm:flex-1 ">
          <div className=" p-6 text-6xl text-[#a30cfd] tagline text-center">
            Discover New Opportunities
          </div>
          {/* <div className="details px-3 py-3 text-[#fcfcfc] ">
          <p className="py-3">
            Emplacement is the ultimate job search platform that helps you find
            the perfect job that matches your skills, experience, and
            preferences.
          </p>

          <p className="py-3">
            So why wait? <span class="brand">Sign Up</span> for Emplacement
            today and start your job search journey towards your dream career.
          </p>
        </div> */}
          <div className="buttonlist flex flex-row p-3 m-3 self-center justify-center">
            <Link
              to="./Jobs"
              className="text-[#c0bdc1] flex py-2 mx-3 w-40 rounded-full apply text-center justify-center"
            >
              Get Placed
            </Link>
            <Link
              to="./About"
              className="text-[#000] flex py-2 mx-3 w-40 rounded-full text-center justify-center more"
            >
              Learn more
            </Link>
          </div>
        </div>
        {/* <div className="flex sm:flex-1 px-6 py-6 self-center">
        <img
          src={heroimg}
          alt="heroimg"
          className=" px-6 py-6 flex-1 min-w-screen self-center min-h-max"
        />
      </div> */}
      </div>
    </div>
  );
};
