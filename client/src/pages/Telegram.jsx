import React from "react";
import "../assets/css/telegram.css";
import notification from "../assets/images/notification.svg";
import telegram from "../assets/images/telegram.svg";

export default function Telegram() {
  return (
    <div className="telegram">
      <div className="heading">Emplacement is now available on Telegram.</div>
      <div className="img">
        <img src={notification} alt="telegram" className="notificationimg" />
      </div>
      <div className="content">
        <p>
          Things are easier than before. You can now get all the latest updates
          on your Telegram. Turn on your notifications and stay updated.
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
  );
}
