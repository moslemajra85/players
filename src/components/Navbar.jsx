import React from 'react'
import { FaFutbol, FaHome, FaUsers, FaCog } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaFutbol className="navbar-logo" title="Football" />
        <span className="navbar-title">Players</span>
      </div>
      <div className="navbar-right">
        <FaHome className="navbar-icon" title="Home" />
        <FaUsers className="navbar-icon" title="Teams" />
        <FaCog className="navbar-icon" title="Settings" />
      </div>
    </nav>
  )
}

export default Navbar