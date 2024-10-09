import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./AboutUs";
import Footer from './components/Footer';
import ContactUs from "./ContactUs";
import TermsAndConditions from "./TermsAndConditions";


function App() {
  return (
    <Router>
      <Header />
    <Routes>
      {/* Define the route for Home page */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
