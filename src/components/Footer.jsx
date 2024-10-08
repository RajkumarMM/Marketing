import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import KanavulabIcon2 from '../assets/Kanavu Labs Logo.png';

function Footer() {
  return (
    <footer className="text-light py-2" style={{ backgroundColor: '#fa880c' }}>
      <div className="container text-center">
        <img src={KanavulabIcon2} alt="Kanavu Lab Icon" className="my-4" />
        <div className="d-flex justify-content-center mb-4 gap-3">
          <a href="#" aria-label="LinkedIn" className="text-white me-3">
            <LinkedInIcon fontSize="large" />
          </a>
          <a 
            href="https://www.instagram.com/kanavulabs_official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="text-white me-3"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a href="#" aria-label="Facebook" className="text-white me-3">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="#" aria-label="YouTube" className="text-white">
            <YouTubeIcon fontSize="large" />
          </a>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">IMPORTANT LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-white" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-white" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-white" activeClassName="active">Services</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-white" activeClassName="active">Our Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="text-white" activeClassName="active">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-white" activeClassName="active">Reach Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">NEW BUSINESS</h5>
            <p>
              <a href="mailto:hr@kanavulabs.com" className="text-white">hr@kanavulabs.com</a>
            </p>
            <p>+91 9876543211</p>
            <h5 className="fw-semibold">ADDITIONAL LINKS</h5>
            <p>
              <NavLink to="/sitemap" className="text-white" activeClassName="active">Site Map</NavLink>
            </p>
            <p>Terms & Conditions</p>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">WE'RE HIRING</h5>
            <p>
              <a href="mailto:jobs@kanavulabs.com" className="text-white">jobs@kanavulabs.com</a>
            </p>
          </div>
        </div>
        <div className="small">
          <p>Copyright ©2024 All Rights Reserved By Kanavu Labs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
