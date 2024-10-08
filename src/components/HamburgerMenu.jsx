import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom'; // Import NavLink
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

  return (
    <div>
      {/* Hamburger icon */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={25} />

      {/* Menu content (always rendered but hidden or shown based on isOpen state) */}
      <div className={`menu ${isOpen ? 'show' : ''} d-flex justify-content-between align-items-center gap-4 text-light`}>
        <div>
          <ul>
            <li>
              <NavLink to="/" className='fs-4 fw-semibold' activeClassName="active" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className='fs-4 fw-semibold' activeClassName="active" onClick={handleLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className='fs-4 fw-semibold' activeClassName="active" onClick={handleLinkClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourPortfolio" className='fs-4 fw-semibold' activeClassName="active" onClick={handleLinkClick}>
                Our Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className='fs-4 fw-semibold' activeClassName="active" onClick={handleLinkClick}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/ReachUs" className='fs-4 fw-semibold' activeClassName="active" onClick={handleLinkClick}>
                Reach Us
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
