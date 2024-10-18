import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function SocialMedia() {
  return (
    <div className="py-4">
      <ul className='list-unstyled'>
        <li className='mb-3'><a href="#" aria-label="LinkedIn" className="text-white"> <LinkedInIcon fontSize="medium" /> </a></li>
        <li className='mb-3'><a href="https://www.instagram.com/kanavulabs_official/" 
        target="_blank" 
        rel="noopener noreferrer" // This is for security reasons, opening in a new tab
        aria-label="Instagram" className="text-white"> <InstagramIcon fontSize="medium" /> </a></li>
        <li className='mb-3'>      <a href="#" aria-label="Facebook" className="text-white"> <FacebookIcon fontSize="medium" /></a>
        </li>
        <li><a href="#" aria-label="YouTube" className="text-white"><YouTubeIcon fontSize="medium" /></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia;
