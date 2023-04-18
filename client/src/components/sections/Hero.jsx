import { React, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/hero.css";
import heroimg from "../../assets/images/heroimg.svg";
import { ThemeContext } from "../../App";

export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="hero bg-[#F6F6F9] dark:bg-[#181A1E] p-6">
        <div className="body flex flex-col sm:flex-row rounded-3xl bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
          <div className="overlay sm:flex-1 justify-center self-center">
            <div className="p-6 m-6 text-6xl text-[#a30cfd] tagline">
              Discover New Opportunities
            </div>
            <div className="details p-6 m-6 text-[#fcfcfc] ">
              <p className="py-3">
                Emplacement is the ultimate job search platform that helps you
                find the perfect job that matches your skills, experience, and
                preferences.
              </p>

              <p className="py-3">
                So why wait? <span class="brand">Sign Up</span> for Emplacement
                today and start your job search journey towards your dream
                career.
              </p>
            </div>
            <div className="buttonlist flex flex-row  p-3 m-3 self-center justify-center align-bottom">
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
          <div className="flex sm:flex-1 px-6 py-6 self-center">
            <img
              src={heroimg}
              alt="heroimg"
              className=" px-6 py-6 flex-1 min-w-screen self-center min-h-max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
