import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/css/hero.css'
import heroimg from '../../assets/images/heroimg.svg'

export const Hero = () => {
  return (
    <div className='body'>
      <div className='text'>
        <div className='tagline'>Discover New Opportunities</div>
        <div className='details'>
          <p>
            Emplacement is the ultimate job search platform that helps you find the perfect job that matches your skills, experience, and preferences.
          </p>

          <p>
            So why wait? <span class="brand">Sign Up</span> for Emplacement today and start your job search journey towards your dream career.
          </p>


        </div>
        <div className='buttonlist'>
          <Link to='./Jobs' className='herobutton join'>Get Placed</Link>
          <Link to='./About' className='herobutton learn'>Learn more</Link>
        </div>
      </div>
      <div className='image'>
        <img src={heroimg} alt="heroimg" className='heroimg' />
      </div>

    </div >
  )
}
