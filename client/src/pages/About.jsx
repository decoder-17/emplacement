import { React, useContext } from "react";
import "../assets/css/about.css";
import { ThemeContext } from "../App";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className=" bg-[#F6F6F9] dark:bg-[#181A1E]">
        <div className="about">
          <div className="heading text sm:flex-1 p-2">
            The ones' who made it possible.
          </div>
          <h1 className="content text-black dark:text-white">
            Who actually worked
          </h1>
          <div className="useful bg-[#F6F6F9] dark:bg-[#181A1E]">
            <div className="people bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
              <div className="image">
                {" "}
                <img
                  src="https://avatars.githubusercontent.com/u/55330971?v=4"
                  alt="avatar"
                  className="avatar"
                />{" "}
              </div>
              <div className="name text-black dark:text-white">
                Neeraj Chopra
              </div>
              <div className="designation text-black dark:text-white">
                Only Backend & Co.
              </div>
            </div>
            <div className="people bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
              <div className="image">
                {" "}
                <img
                  src="https://avatars.githubusercontent.com/u/54593072?v=4"
                  alt="avatar"
                  className="avatar"
                />{" "}
              </div>
              <div className="name text-black dark:text-white">
                Tanupam Saha
              </div>
              <div className="designation text-black dark:text-white">
                Enjoys depression
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
