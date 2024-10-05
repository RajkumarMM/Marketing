import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import './HamburgerMenu.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {/* Hamburger icon */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={25} />

      {/* Menu content (always rendered but hidden or shown based on isOpen state) */}
      <div className={`menu ${isOpen ? 'show' : ''} d-flex justify-content-between align-items-center gap-4`}>
        <div>
        <ul>
          <li><a href="/" className='fs-4 fw-semibold'>Home</a></li>
          <li><a href="/about" className='fs-4 fw-semibold'>About</a></li>
          <li><a href="/services" className='fs-4 fw-semibold'>Services</a></li>
          <li><a href="/ourPortfolio" className='fs-4 fw-semibold'>Our Portfolio</a></li>
          <li><a href="/careers" className='fs-4 fw-semibold'>Careers</a></li>
          <li><a href="/ReachUs" className='fs-4 fw-semibold'>Reach Us</a></li>
        </ul>
        </div>
        <div class="d-flex flex-column justify-content-start">
          <h2 class="fs-5 fw-semibold">Contact Information</h2>
          <p class="fs-6 fw-light ">
            Officia Nisi Corrupti Eaue Cumque Exercitationem <br /> Labore Sint Sapiente Rem Neque
            Temporibus Id Ratione Perspiciatis.
          </p>
          <div class="d-flex justify-content-center mb-4 gap-3">
      <a href="#" aria-label="LinkedIn" class="text-white me-3"> <LinkedInIcon fontSize="small" /> </a>
      <a href="#" aria-label="Instagram" class="text-white me-3"> <InstagramIcon fontSize="small" /> </a>
      <a href="#" aria-label="Facebook" class="text-white me-3"> <FacebookIcon fontSize="small" /> </a>
      <a href="#" aria-label="YouTube" class="text-white"><YouTubeIcon fontSize="small" /> </a>
    </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
