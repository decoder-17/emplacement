import React from 'react'
import "../../assets/css/sites.css"
import cuvette from "../../assets/images/cuvette.svg"
import naukri from "../../assets/images/naukri.png"

export default function Sites() {
  return (
    <div className='pages'>
      <div className='heading'>
        Pages
      </div>
      <div className="sites">
        <div className="site">
          <div className="sitelogo"> <img src={cuvette} /> </div>
          <a href="https://cuvette.tech/app/student/" className="sitename" target="_blank">Cuvette</a>
        </div>
        <div className="site">
          <div className="sitelogo"> <img src={naukri} /> </div>
          <a href="https://www.naukri.com/" className="sitename" target="_blank">Naukri.com</a>

        </div>
      </div>
    </div>
  )
}
