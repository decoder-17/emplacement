import { React, useContext } from "react";
import "../assets/css/about.css";
import { ThemeContext } from "../App";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className=" bg-[#F6F6F9] dark:bg-[#181A1E]">
        <div className="about">
          <div className="heading text sm:flex-1 my-2 py-2">
            The ones' who made it possible.
          </div>
          <h1 className="content">Who actually worked</h1>
          <div className="useful">
            <div className="people">
              <div className="image">
                {" "}
                <img
                  src="https://avatars.githubusercontent.com/u/55330971?v=4"
                  alt="avatar"
                  className="avatar"
                />{" "}
              </div>
              <div className="name">Neeraj Chopra</div>
              <div className="designation">Only Backend & Co.</div>
            </div>
            <div className="people">
              <div className="image">
                {" "}
                <img
                  src="https://avatars.githubusercontent.com/u/54593072?v=4"
                  alt="avatar"
                  className="avatar"
                />{" "}
              </div>
              <div className="name">Tanupam Saha</div>
              <div className="designation">Enjoys depression</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
