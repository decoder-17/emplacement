import React from 'react'
import '../assets/css/hero.css'

export default function Auth() {

  return (
    <div className='signin'>
      <input type='text' placeholder='Email goes here' />
      <inupt type='password' placeholder='Enter your password' />
      <button type='submit'>Sign In</button>
    </div>
  )
}
