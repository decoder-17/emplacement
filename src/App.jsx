import { useState } from 'react'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import About from './components/About'
import Contact from './components/Contact'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
