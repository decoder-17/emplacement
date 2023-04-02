import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar } from './components/layout/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Telegram from './pages/Telegram'
import Jobs from './pages/Jobs'
import TelegramPopup from './components/TelegramPopup'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Telegram" element={<Telegram />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <TelegramPopup />
      </Router>
    </div>
  )
}

export default App
