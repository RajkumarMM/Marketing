import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function SocialMedia() {
  return (
    <div class="d-flex flex-column justify-content-start gap-3">
      <a href="#" aria-label="LinkedIn" class="text-white me-3 align-content-center"> <LinkedInIcon fontSize="medium" /> </a>
      <a href="https://www.instagram.com/kanavulabs_official/" 
        target="_blank" 
        rel="noopener noreferrer" // This is for security reasons, opening in a new tab
        aria-label="Instagram" class="text-white me-3 align-content-center"> <InstagramIcon fontSize="medium" /> </a>
      <a href="#" aria-label="Facebook" class="text-white me-3 align-content-center"> <FacebookIcon fontSize="medium" /></a>
      <a href="#" aria-label="YouTube" class="text-white align-content-center"><YouTubeIcon fontSize="medium" /></a>
    </div>
  )
}

export default SocialMedia;
