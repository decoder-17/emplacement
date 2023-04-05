import { useState } from 'react'
import React from 'react'
import '../assets/css/telegrampopup.css'
import telegram from '../assets/images/telegram.svg'

export default function TelegramPopup() {
  const [popup, setpopup] = useState(true)
  if (!popup) { return null }

  return (
    <div className='popup'>
      <div className='close'><button className='closebtn' onClick={() => {
        setpopup(false)
      }}
      >X</button></div>
      <div className="pophead">Welcome to Emplacement</div>
      <div className="popbody">Add our Telegram Bot and Get updates of Internships, Jobs, and much more.</div>
      <div className="buttonarea">
        <button className="popbutton">

          Telegram<img src={telegram} className='popuplogo' alt="telegram" /></button>
      </div>
    </div >
  )
}
