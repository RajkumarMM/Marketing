import React, { useState } from 'react';
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
    <div className="container my-5 text-light">
      <h1 className="text-center mb-4" style={{ color: "#fa880c" }}>Contact Us</h1>

      {/* Chat with Us and Call Us Sections in a Row */}
      <div className="row d-flex justify-content-between">
        {/* Chat with Us Column */}
        <div className="col-md-5 my-4 p-4 rounded" style={{ border: "1px solid #fa880c", backgroundColor: '#1a1a1a' }}>
          <h3 style={{ color: "#fa880c" }}>Chat with Us</h3>
          <p className='fs-5 fw-semibold'>We are available to chat with you anytime. Click below to start a conversation with our support team.</p>
          <a href="mailto:example@example.com" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
            Start Chat
          </a>
        </div>

        {/* Call Us Column */}
        <div className="col-md-5 my-4 p-4 rounded" style={{ border: "1px solid #fa880c", backgroundColor: '#1a1a1a' }}>
          <h3 style={{ color: "#fa880c" }}>Call Us</h3>
          <span className='fs-5 fw-semibold me-2'>Reach us directly at:</span> 
          <p className='mt-2' style={{ color: "#fa880c" }}>Available from 9:00 AM to 6:00 PM, Monday to Friday.</p>
          <a href="tel:+919876543210" className='btn btn-outline-light'> Call Us</a>
        </div>
      </div>

      {/* Submit a Query Section */}
      <div className="my-4 p-4 rounded" style={{ backgroundColor: '#1a1a1a', border: "1px solid #fa880c" }} id='whatwedo'>
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
