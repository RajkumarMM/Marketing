import React, { useEffect, useState } from 'react';
import './Scroll.css';
import { Link } from 'react-scroll';

function Scroll() {
  const [scrollVisible, setScrollVisible] = useState(true);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Hide scroll down button when scrolling down
    setScrollVisible(scrollY <= 50);
    // Show scroll to top button when scrolling down past a certain point
    setScrollTopVisible(scrollY > 200); // Adjust this value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrollVisible && (
        <div className='container'>
          <Link 
            to="whatwedo" // The id of the target component
            smooth={true} // Enable smooth scrolling
            duration={500} // Duration of scroll in milliseconds
          >
            <span className="scroll-text">SCROLL</span>
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      )}
      
      {scrollTopVisible && (
        <div className='container'>
        <Link 
          to="top" // The id of the target component
          smooth={true} // Enable smooth scrolling
          duration={500} // Duration of scroll in milliseconds
        >
          <span className="scroll-text-top">SCROLL</span>
          <div className="scroll-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
      )}
    </>
  );
}

export default Scroll;
