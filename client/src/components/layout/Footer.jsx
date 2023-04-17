import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/footer.css";
import logo from "/logo.png";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { ThemeContext } from "../../App";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className=" bg-[#F6F6F9] dark:bg-[#181A1E]">
        <div className="flex flex-row justify-between items-center   text-black dark:text-[#c0bdc1] p-2 footer">
          <div>
            <div className="flex flex-row justify-center items-center">
              <img src={logo} alt="logo" className="logo" />
              <div className="brandname">
                <Link to={`/`}>emplacement</Link>
              </div>
            </div>
          </div>
          <div className="">
            {" "}
            Developed for a cause.
            {/* <a
            href="https://github.com/decoder-17/emplacement"
            className="brand"
            target="_blank"
          >
            {" "}
            @coder_17
          </a> */}
          </div>
          <div className="socials">
            <a href="" target="_blank">
              <TiSocialLinkedin />
            </a>
            <a href="" target="_blank">
              <TiSocialTwitter />
            </a>
            <a href="" target="_blank">
              {" "}
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
