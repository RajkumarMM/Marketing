import React, { useEffect } from 'react';
import Scroll from "./components/Scroll";
import WhatWeDo from "./components/WhatWeDo";
import Hero from "./components/Hero";
import WeDoDifferent from "./components/WeDoDifferent";
import SkyRocket from "./components/SkyRocket";
import HelpClient from "./components/HelpClient";
import Footer from './components/Footer';
import './Home.css';

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.container-scroll > div');
    let isScrolling = false;

    const handleWheel = (event) => {
      if (isScrolling) return;
      isScrolling = true;

      const delta = event.deltaY;
      const currentSection = getCurrentSection();
      let targetSection;

      if (delta > 0) {
        targetSection = currentSection.nextElementSibling || currentSection;
      } else {
        targetSection = currentSection.previousElementSibling || currentSection;
      }

      targetSection.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Adjust timeout to match scroll duration
    };

    const getCurrentSection = () => {
      return Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='container-scroll'>
      {/* <Scroll /> */}
      <div>
        <Hero />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div>
        <WeDoDifferent />
      </div>
      <div>
        <SkyRocket />
      </div>
      <div>
        <HelpClient />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
