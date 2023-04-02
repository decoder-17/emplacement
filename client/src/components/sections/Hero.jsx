import React from 'react'
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
            Our mission is to connect job seekers with the best employment opportunities available, and make the job search process more efficient and stress-free.</p>

          <p>
            So why wait? <span class="brand">Sign Up</span> for Emplacement today and start your job search journey towards your dream career.
          </p>


        </div>
        <div className='buttonlist'>
          <button className='herobutton join'>Get Placed</button>
          <button className='herobutton learn'>Learn more</button>
        </div>
      </div>
      <div className='image'>
        <img src={heroimg} alt="heroimg" className='heroimg' />
      </div>

    </div >
  )
}
