import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function SocialMedia() {
  return (
    <div className="d-flex flex-column justify-content-start gap-3">
      <a href="#" aria-label="LinkedIn" className="text-white me-3 align-content-center"> <LinkedInIcon fontSize="medium" /> </a>
      <a href="https://www.instagram.com/kanavulabs_official/" 
        target="_blank" 
        rel="noopener noreferrer" // This is for security reasons, opening in a new tab
        aria-label="Instagram" className="text-white me-3 align-content-center"> <InstagramIcon fontSize="medium" /> </a>
      <a href="#" aria-label="Facebook" className="text-white me-3 align-content-center"> <FacebookIcon fontSize="medium" /></a>
      <a href="#" aria-label="YouTube" className="text-white align-content-center"><YouTubeIcon fontSize="medium" /></a>
    </div>
  )
}

export default SocialMedia;
