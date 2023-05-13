import { React, useContext } from "react";
import { ThemeContext } from "../../App";

export default function Features() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="hero bg-[#F6F6F9] dark:bg-[#181A1E] p-6">
        <div className="features rounded-3xl flex flex-col gap-8 bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
          <div className="heading text-4xl">Features</div>
          <div className="points max-w-xl mx-auto">
            <div className="subheading text-2xl font-bold">
              One stop solution
            </div>
            <div className="details text-lg text-center mt-2">
              Traversing through several websites for job and internship stops
              here.
            </div>
          </div>
          <div className="points max-w-xl mx-auto">
            <div className="subheading text-2xl font-bold">Easy to use</div>
            <div className="details text-lg text-center mt-2">
              Website has been made keeping in mind the needs and requirement of
              the end-users.
            </div>
          </div>
          <div className="points max-w-xl mx-auto">
            <div className="subheading text-2xl font-bold">Fast and smooth</div>
            <div className="details text-lg text-center mt-2">
              We understand the process of job hunt can get tough and complex at
              times however we have tried to make it as smooth as possible.
            </div>
          </div>
          <div className="points max-w-xl mx-auto">
            <div className="subheading text-2xl font-bold">Telegram Bot</div>
            <div className="details text-lg text-center mt-2">
              You'll get updated everytime a new job or internship is posted on
              our website.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
