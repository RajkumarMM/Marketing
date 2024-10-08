import React from 'react';
import Scroll from "./components/Scroll";
import WhatWeDo from "./components/WhatWeDo";
import Hero from "./components/Hero";
import WeDoDifferent from "./components/WeDoDifferent";
import SkyRocket from "./components/SkyRocket";
import HelpClient from "./components/HelpClient";

function Home() {
  return (
    <>
      <Hero />
      <Scroll view= 'twoscroll'/>
      <WhatWeDo />
      <WeDoDifferent />
      <SkyRocket />
      <HelpClient  />
    </>
  )
}

export default Home
