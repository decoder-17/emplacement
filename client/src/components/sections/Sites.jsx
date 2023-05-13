import { React, useContext } from "react";
import "../../assets/css/sites.css";
import cuvette from "../../assets/images/cuvette.svg";
import naukri from "../../assets/images/naukri.png";
import { ThemeContext } from "../../App";

export default function Sites() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="hero bg-[#F6F6F9] dark:bg-[#181A1E] p-6">
        <div className="pages rounded-3xl bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
          <div className="heading">Sources</div>
          <div className="sites flex gap-4">
            <div className="site bg-gray-300/90 p-8 rounded-full w-44 aspect-square  text-slate-900">
              <div className="sitelogo">
                {" "}
                <img src={cuvette} />{" "}
              </div>
              <a
                href="https://cuvette.tech/app/student/"
                className="sitename text-gray-900"
                target="_blank"
                alt="cuvette"
              >
                Cuvette
              </a>
            </div>
            <div className="site bg-gray-300/90 p-8 rounded-full w-44 aspect-square  text-slate-900">
              <div className="sitelogo">
                {" "}
                <img src={naukri} />{" "}
              </div>
              <a
                href="https://www.naukri.com/"
                className="sitename text-gray-900"
                target="_blank"
                alt="naukri.com"
              >
                Naukri.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
