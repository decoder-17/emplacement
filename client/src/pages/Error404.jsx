import React from 'react'
import error from '../assets/images/error.svg'
import '../assets/css/error.css'

export default function Error() {
  return (
    <div className='error'>
      <img src={error} alt="error" className='errorimg' />
      <p className='errormsg'>Sorry, the page requested isn't found. Please click on Home to go back.</p>
    </div>
  )
}
