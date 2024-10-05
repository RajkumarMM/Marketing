import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import KanavulabIcon2 from '../assets/Kanavu Labs Logo.png';
function Footer() {
  return (
    <footer class="text-light py-2" style={{backgroundColor: '#fa880c'}}>
  <div class="container text-center">
    <img src={KanavulabIcon2} alt="kanavuLabIcon" className="my-4" />
    <div class="d-flex justify-content-center mb-4 gap-3">
      <a href="#" aria-label="LinkedIn" class="text-white me-3"> <LinkedInIcon fontSize="large" /> </a>
      <a href="#" aria-label="Instagram" class="text-white me-3"> <InstagramIcon fontSize="large" /> </a>
      <a href="#" aria-label="Facebook" class="text-white me-3"> <FacebookIcon fontSize="large" /> </a>
      <a href="#" aria-label="YouTube" class="text-white"><YouTubeIcon fontSize="large" /> </a>
    </div>
    <div class="row mb-4">
      <div class="col-12 col-md-4">
        <h5 class="fw-semibold">IMPORTANT LINKS</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#" class="text-white"> Home </a>
          </li>
          <li>
            <a href="#" class="text-white"> About </a>
          </li>
          <li>
            <a href="#" class="text-white"> Services </a>
          </li>
          <li>
            <a href="#" class="text-white"> Our Portfolio </a>
          </li>
          <li>
            <a href="#" class="text-white"> Careers </a>
          </li>
          <li>
            <a href="#" class="text-white"> Reach Us </a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-4">
        <h5 class="fw-semibold">NEW BUSINESS</h5>
        <p>
          <a href="mailto:hr@kanavulabs.com" class="text-white"> hr@kanavulabs.com </a>
        </p>
        <p>+91 9876543211</p>
        <h5 class="fw-semibold">ADDITIONAL LINKS</h5>
        <p>
          <a href="#" class="text-white"> Site Map </a>
        </p>
        <p>Terms & Condition</p>
      </div>
      <div class="col-12 col-md-4">
        <h5 class="fw-semibold">WE'RE HIRING</h5>
        <p>
          <a href="mailto:jobs@kanavulabs.com" class="text-white"> jobs@kanavulabs.com </a>
        </p>
      </div>
    </div>
    <div class="small">
      <p>Copyright ©2024 All Rights Reserved By Kanavu Labs</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
