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
          <div className="heading">Pages</div>
          <div className="sites">
            <div className="site">
              <div className="sitelogo">
                {" "}
                <img src={cuvette} />{" "}
              </div>
              <a
                href="https://cuvette.tech/app/student/"
                className="sitename"
                target="_blank"
                alt="cuvette"
              >
                Cuvette
              </a>
            </div>
            <div className="site">
              <div className="sitelogo">
                {" "}
                <img src={naukri} />{" "}
              </div>
              <a
                href="https://www.naukri.com/"
                className="sitename"
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
