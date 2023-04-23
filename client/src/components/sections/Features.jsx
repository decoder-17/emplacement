import { React, useContext } from "react";
import { ThemeContext } from "../../App";

export default function Features() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="hero bg-[#F6F6F9] dark:bg-[#181A1E] p-6">
        <div className="features rounded-3xl bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
          <div className="heading">Features</div>
          <div className="points">
            <div className="subheading">Easy to Use</div>
            <div className="details">
              Traversing through several websites for job and internship stops
              here.
            </div>
          </div>
          <div className="points">
            <div className="subheading">Easy to Use</div>
            <div className="details">
              No need to traverse through several websites no more.
            </div>
          </div>
          <div className="points">
            <div className="subheading">Easy to Use</div>
            <div className="details">
              No need to traverse through several websites no more.
            </div>
          </div>
          <div className="points">
            <div className="subheading">Easy to Use</div>
            <div className="details">
              No need to traverse through several websites no more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
