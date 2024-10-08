import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./AboutUs";
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Header />
    <Routes>
      {/* Define the route for Home page */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
