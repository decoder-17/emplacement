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
              className="closebtn text-black dark:text-[#F7F7F7]"
              onClick={() => {
                setpopup(false);
              }}
            >
              X
            </button>
          </div>
          <div className="pophead text-black dark:text-white">
            Welcome to Emplacement
          </div>
          <div className="popbody text-black dark:text-white">
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
