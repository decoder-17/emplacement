import { useState } from 'react'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
