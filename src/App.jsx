import React from "react";
import Scroll from "./components/Scroll";
import WhatWeDo from "./components/WhatWeDo";
import Hero from "./components/Hero";
import WeDoDifferent from "./components/WeDoDifferent";
import SkyRocket from "./components/SkyRocket";
import HelpClient from "./components/HelpClient";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Scroll />
      <WhatWeDo />
      <WeDoDifferent />
      <SkyRocket />
      <HelpClient  />
      <Footer />
    </>
  );
}

export default App;
