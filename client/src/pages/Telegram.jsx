import { React, useContext } from "react";
import "../assets/css/telegram.css";
import notification from "../assets/images/notification.svg";
import telegram from "../assets/images/telegram.svg";
import { ThemeContext } from "../App";

export default function Telegram() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : ""}>
      <div className="bg-[#F6F6F9] dark:bg-[#181A1E] p-6">
        <div className="telegram sm:flex-row rounded-3xl bg-[#FFFFFF] dark:bg-[#202528] shadow-lg shadow-[rgba(132, 139, 200, 0.18)]-500/40">
          <div className="heading">
            Emplacement is now available on Telegram.
          </div>
          <div className="img">
            <img
              src={notification}
              alt="telegram"
              className="notificationimg"
            />
          </div>
          <div className="content ">
            <p className="text-black dark:text-white">
              Things are easier than before. You can now get all the latest
              updates on your Telegram. Turn on your notifications and stay
              updated.
            </p>
          </div>

          <div className="telegrambtn">
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
