import React, { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import SocialMedia from './components/SocialMedia';
import bannerImage from './assets/aboutBanner.png';
import Scroll from './components/Scroll';

function ContactUs() {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the query to your server or API
    setSubmitted(true);
  };

  return (
    <>
    <div className="vh-100 vw-100 bg-black text-white">
                {/* Background image with opacity */}
                <div className="position-absolute top-0 start-0 w-100 h-100">
                    <img
                        src={bannerImage}
                        alt="Office Background"
                        className="w-100 h-100 object-cover opacity-50"
                        style={{ filter: 'grayscale(150%)' }}
                    />
                </div>

                {/* Content container */}
                <div className="container h-100 d-flex flex-column justify-content-evenly position-relative z-0">

                    {/* Headings in the middle */}
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <div className="text-center">
                            <h1 className="display-4 fw-bold">
                            Let’s connect! Your<span style={{ color: "#fa880c" }}> journey to success </span> <br />
                             begins with a <span style={{ color: "#fa880c" }}>conversation.</span>
                            </h1>
                            <p className="fw-semibold">
                            Have questions or need assistance? <br />Reach out to us today, and let’s get started!
                            </p>
                        </div>
                    </div>

                    {/* SocialMedia content at the bottom */}
                    <div>
                        <SocialMedia />
                    </div>
                </div>
            </div>
    <div className="container my-5 text-light" id='whatwedo'>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#fa880c" }}>Contact Us</h2>
      {/* Chat with Us and Call Us Sections in a Row */}
      <div className="row d-flex justify-content-between">
        {/* Chat with Us Column */}
        <div className="col-md-5 my-4 p-4 rounded" style={{ border: "1px solid #fa880c", backgroundColor: '#1a1a1a' }}>
          <h3 style={{ color: "#fa880c" }}>Chat with Us</h3>
          <p className='fs-5 fw-semibold'>We are available to chat with you anytime. Click below to start a conversation with our support team.</p>
          <a href="mailto:support@kanavulabs.com?cc=magudeeswarn.chandrasekaran@kanavulabs.com&amp;subject=KanavuLabs%20Website%20Enquiry" className="btn btn-outline-light" target="_blank">
            Mail Us
          </a>
        </div>

        {/* Call Us Column */}
        <div className="col-md-5 my-4 p-4 rounded" style={{ border: "1px solid #fa880c", backgroundColor: '#1a1a1a' }}>
          <h3 style={{ color: "#fa880c" }}>Call Us</h3>
          <span className='fs-5 fw-semibold me-2'>Reach us directly at:</span> 
          <p className='mt-2' style={{ color: "#fa880c" }}>Available from 9:00 AM to 6:00 PM, Monday to Friday.</p>
          <a href="tel:+919629824568" className='btn btn-outline-light'> Call Us</a>
        </div>
      </div>

      {/* Submit a Query Section */}
      <div className="my-4 p-4 rounded" style={{ backgroundColor: '#1a1a1a', border: "1px solid #fa880c" }} >
        <h3 style={{ color: "#fa880c" }}>Submit a Query</h3>
        <p className='fs-5 fw-semibold'>If you have any specific questions or concerns, feel free to submit your query below:</p>
        
        {submitted ? (
          <div className="alert alert-success" role="alert">
            Thank you! Your query has been submitted successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='fs-5 fw-semibold' htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                style={{ backgroundColor: '#333', color: '#fff', borderColor: '#fa880c' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className='fs-5 fw-semibold mt-2' htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                style={{ backgroundColor: '#333', color: '#fff', borderColor: '#fa880c' }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className='fs-5 fw-semibold mt-2' htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                style={{ backgroundColor: '#333', color: '#fff', borderColor: '#fa880c' }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className='fs-5 fw-semibold mt-2' htmlFor="query">Your Message</label>
              <textarea
                id="query"
                className="form-control"
                rows="5"
                style={{ backgroundColor: '#333', color: '#fff', borderColor: '#fa880c' }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-large btn-outline-light mt-3">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
    <Scroll />
    </>
  );
}

export default ContactUs;
