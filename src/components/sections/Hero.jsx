import React from 'react'
import '../../assets/css/hero.css'
import heroimg from '../../assets/images/heroimg.svg'

export const Hero = () => {
  return (
    <div className='body'>
      <div className='text'>
        <div className='tagline'>Discover New Opportunities</div>
        <div className='details'>Unemployment has a solution and that is emplacement. Your placement cell may restrain your potential but we won't.</div>
        <div className='buttonlist'>
          <button className='herobutton join'>Get a Job</button>
          <button className='herobutton learn'>Learn more</button>
        </div>
      </div>
      <div className='image'>
        <img src={heroimg} alt="heroimg" className='heroimg' />
      </div>

    </div>
  )
}
