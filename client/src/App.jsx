import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar } from './components/layout/Navbar'
import About from './pages/About'
import Telegram from './pages/Telegram'
import Jobs from './pages/Jobs'
import TelegramPopup from './components/TelegramPopup'
import Error from './pages/Error404'
import Footer from './components/layout/Footer'

export const ThemeContext = React.createContext();

export function App() {

  const [theme, setTheme] = useState("");
  function toggleTheme() {
    setTheme((curr) => (curr === "" ? "dark" : ""));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Home /> <TelegramPopup /></>} />
            <Route path="/Telegram" element={<Telegram />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>

  )
}

export default App
