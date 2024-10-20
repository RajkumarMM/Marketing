import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import KanavulabIcon2 from '../assets/Kanavu Labs Logo.png';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-light py-md-2 d-flex justify-content-between align-items-center h-100 vw-100" style={{ backgroundColor: '#fa880c' }}>
      <div className="container text-md-start text-center ">
        <div className='text-center py-2'>
        <img src={KanavulabIcon2} alt="Kanavu Lab Icon" />
        </div>
        <div className="d-flex justify-content-center my-md-5 gap-5 mb-2">
          <a href="#" aria-label="LinkedIn" className="text-white me-3">
            <LinkedInIcon sx={{fontSize:'2rem'}}/>
          </a>
          <a 
            href="https://www.instagram.com/kanavulabs_official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="text-white me-3"
          >
            <InstagramIcon sx={{fontSize:'2rem'}}/>
          </a>
          <a href="#" aria-label="Facebook" className="text-white me-3">
            <FacebookIcon sx={{fontSize:'2rem'}}/>
          </a>
          <a href="#" aria-label="YouTube" className="text-white">
            <YouTubeIcon sx={{fontSize:'2rem'}}/>
          </a>
        </div>
        <div className="row my-md-3 d-flex justify-content-evenly">
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-md-3">IMPORTANT LINKS</h5>
            <ul className="list-unstyled d-flex flex-column gap-md-2 fs-6">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Our Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/careers" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Careers</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Reach Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-md-3">NEW BUSINESS</h5>
            <ul className='list-unstyled d-flex flex-column gap-md-2 fs-6'>
              <li><a href="mailto:hr@kanavulabs.com" className="text-white">hr@kanavulabs.com</a></li>
              <li><a href="#" className="text-white">+91 9876543211</a></li>
            </ul>
            <h5 className="fw-semibold mt-md-4 mb-md-3">ADDITIONAL LINKS</h5>
            <ul className='list-unstyled d-flex flex-column gap-md-2 fs-6'>
              <li><NavLink to="/sitemap" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Site Map</NavLink></li>
              <li>
              <NavLink to="/terms-and-conditions" className={({ isActive }) => (isActive ? 'text-white active' : 'text-white')}>Terms & Conditions</NavLink>

              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-md-3">WE'RE HIRING</h5>
            <p className='fs-6'>
              <a href="mailto:jobs@kanavulabs.com" className="text-white">jobs@kanavulabs.com</a>
            </p>
          </div>
        </div>
        <div className="small mt-md-5 text-center">
          <p>Copyright ©{currentYear} All Rights Reserved By Kanavu Labs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
