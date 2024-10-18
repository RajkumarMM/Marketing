import React, { useState, useEffect } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import './HamburgerMenu.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  // Function to handle closing the menu
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Effect to add/remove no-scroll class
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll'); // Add no-scroll class
    } else {
      document.body.classList.remove('no-scroll'); // Remove no-scroll class
    }

    // Cleanup function to ensure no-scroll is removed on unmount
    return () => {
      document.body.classList.remove('no-scroll'); // Ensure it is removed on unmount
    };
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger icon */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={25} />

      {/* Menu content */}
      <div className={`menu ${isOpen ? 'show' : ''} d-flex justify-content-evenly align-items-center gap-4 text-light`}>
        <div className='flex-shrink-0'>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourPortfolio" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                Our Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                Reach Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'fs-3 fw-bold activeH' : 'fs-3 fw-bold')} onClick={handleLinkClick}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column justify-content-start">
          <h2 className="fs-5 fw-semibold">Contact Information</h2>
          <p className="fs-6 fw-light">
            Officia Nisi Corrupti Eaue Cumque Exercitationem <br /> Labore Sint Sapiente Rem Neque
            Temporibus Id Ratione Perspiciatis.
          </p>
          <div className="d-flex justify-content-center mb-4 gap-3">
            <a href="#" aria-label="LinkedIn" className="text-white me-3">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="https://www.instagram.com/kanavulabs_official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" className="text-white me-3">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white me-3">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="#" aria-label="YouTube" className="text-white">
              <YouTubeIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
