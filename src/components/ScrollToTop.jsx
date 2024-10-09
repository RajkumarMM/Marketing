import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Scroll.css';

function ScrollToTop() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Show scroll to top button when scrolling down past a certain point
    setScrollTopVisible(scrollY > 100); // Adjust this value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
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

export default ScrollToTop;
