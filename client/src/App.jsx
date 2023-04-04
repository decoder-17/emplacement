import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar } from './components/layout/Navbar'
import About from './pages/About'
import Telegram from './pages/Telegram'
import Jobs from './pages/Jobs'
import TelegramPopup from './components/TelegramPopup'
import Error from './pages/Error404'
import Footer from './components/layout/Footer'

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
          <Route path="*" element={<Error />} />
        </Routes>
        <TelegramPopup />
        <Footer />
      </Router>
    </div>
  )
}

export default App
