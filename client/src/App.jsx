import { useState } from 'react'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Introduction from './components/sections/Introduction'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Introduction />
      <About />
      <Contact />
    </div>
  )
}

export default App
