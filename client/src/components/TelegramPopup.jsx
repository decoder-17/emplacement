import { React, useContext, useState } from "react";
import "../assets/css/telegrampopup.css";
import telegram from "../assets/images/telegram.svg";
import { ThemeContext } from "../App";

export default function TelegramPopup() {
  const { theme } = useContext(ThemeContext);
  const [popup, setpopup] = useState(true);
  if (!popup) {
    return null;
  }

  return (
    <div className={theme ? "dark" : ""}>
      <div className=" ">
        <div className="popup bg-[#F6F6F9] dark:bg-[#181A1E]">
          <div className="close">
            <button
              className="closebtn color-white dark:color-black"
              onClick={() => {
                setpopup(false);
              }}
            >
              X
            </button>
          </div>
          <div className="pophead color-white dark:color-black">
            Welcome to Emplacement
          </div>
          <div className="popbody color-white dark:color-black">
            Add our Telegram Bot and Get updates of Internships, Jobs, and much
            more.
          </div>
          <div className="buttonarea">
            <a
              href="https://t.me/ts_ryuk_bot"
              target="_blank"
              rel="noreferrer"
              className="popbutton"
            >
              Telegram
              <img src={telegram} className="popuplogo" alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
