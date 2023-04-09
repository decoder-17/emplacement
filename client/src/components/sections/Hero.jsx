import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/css/hero.css'
import heroimg from '../../assets/images/heroimg.svg'

export const Hero = () => {
  return (
    <div className='body flex flex-col sm:flex-row my-10 py-10 dark:bg-[#2D033B]'>
      <div className='text sm:flex-1 my-10 py-10'>
        <div className=' px-3 text-6xl text-[#a30cfd] tagline'>Discover New Opportunities</div>
        <div className='details px-3 py-3 text-[#fcfcfc] '>
          <p className='py-3'>
            Emplacement is the ultimate job search platform that helps you find the perfect job that matches your skills, experience, and preferences.
          </p>

          <p className='py-3'>
            So why wait? <span class="brand">Sign Up</span> for Emplacement today and start your job search journey towards your dream career.
          </p>


        </div>
        <div className='buttonlist flex flex-row px-3 py-3 my-3 self-center'>
          <Link to='./Jobs' className='text-[#c0bdc1] flex py-2 mx-3 w-40 rounded-full apply text-center justify-center'>Get Placed</Link>
          <Link to='./About' className='text-[#c0bdc1] flex py-2 mx-3 w-40 rounded-full text-center justify-center more'>Learn more</Link>
        </div>
      </div>
      <div className='flex sm:flex-1 px-6 py-6 self-center'>
        <img src={heroimg} alt="heroimg" className=' px-6 py-6 flex-1 h-full w-auto self-center' />
      </div>

    </div >
  )
}
