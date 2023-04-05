import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/footer.css'
import logo from '/logo.png'
import { TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
  return (<>

    <div className="prefooter">
      <div className="brand">
        <div className="logospace">
          <img src={logo} alt="logo" className="logo" />
          <div className="brandname"><Link to={`/`} >emplacement</Link></div>
        </div>

      </div>
      <div className="nav">
        <ul>
          <li> <Link to={`/`} className="navmenu">Home</Link> </li>
          <li><Link to={'/Jobs'} className="navmenu">Jobs</Link></li>
          <li> <Link to={`/Telegram`} className="navmenu">Telegram</Link></li>
          <li><Link to={`/About`} className="navmenu">About Us</Link></li>
        </ul>
      </div>
      <div className="socials">
        <TiSocialLinkedin />
        <TiSocialTwitter />
        <RiInstagramFill />
      </div>
    </div>
    <div className='footer' >
      <div className="footertext">      Developed and Designed by <a href='https://github.com/decoder-17/emplacement' className='brand' target="_blank" > @coder_17</a></div>
    </div></>
  )
}
