import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function SocialMedia() {
  return (
    <div class="d-flex flex-column justify-content-start mb-4 gap-3">
      <a href="#" aria-label="LinkedIn" class="text-white me-3"> <LinkedInIcon fontSize="medium" /> </a>
      <a href="#" aria-label="Instagram" class="text-white me-3"> <InstagramIcon fontSize="medium" /> </a>
      <a href="#" aria-label="Facebook" class="text-white me-3"> <FacebookIcon fontSize="medium" /></a>
      <a href="#" aria-label="YouTube" class="text-white"><YouTubeIcon fontSize="medium" /></a>
    </div>
  )
}

export default SocialMedia;
