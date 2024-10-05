import React from 'react';
import './Header.css';
import HamburgerMenu from './hamburgerMenu';
import Kanavulablogo1 from '../assets/Kanavu Labs Logo.png';

function Header() {
  return (
    <header className="header pt-2" id='top'>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo on the left */}
        <div className="logo">
          <img
            src={Kanavulablogo1}
            alt="Company Logo"
            className="img-fluid"
            // style={{ height: '50px', width: '50px' }}
          />
        </div>
        {/* Hamburger menu on the right */}
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
