import React, { useState, useEffect } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./AboutUs";
import Footer from './components/Footer';
import ContactUs from "./ContactUs";
import TermsAndConditions from "./TermsAndConditions";
import Preloader from "./components/Preloader";
import Service from "./Service";
import LoginSignupForm from "./LoginSignupForm";


function App() {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 3000); // Simulated loading time
  }, []);

  return (
    <Router>
      
      {loading ? ( // Show preloader while loading
        <Preloader />
      ) : (
        <>
        {/* <Header /> */}
        <Routes>
          {/* Define the route for Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/login" element={<LoginSignupForm />} />
          
        </Routes>
        {/* <Footer /> */}
        </>
      )}
      
    </Router>
  );
}

export default App;
