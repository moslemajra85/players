import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaLinkedin /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaYoutube /></a>
      </div>
      <div className="footer-links">
        <a href="#" className="footer-link">About</a>
        <a href="#" className="footer-link">Contact</a>
        <a href="#" className="footer-link">Privacy</a>
        <a href="#" className="footer-link">Terms</a>
        <a href="#" className="footer-link">Careers</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Players. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer