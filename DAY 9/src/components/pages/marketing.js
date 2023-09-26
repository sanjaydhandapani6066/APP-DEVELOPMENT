import React, { useState } from 'react';
import '../../assets/css/userhome.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <ul>
      <li ><a  href="/userhome">Home</a></li>
        <li><a href="/userprofile">Profile</a></li>
        <li><a href="/adminlog">Admin </a></li>
        <li ><a href="/contact">Contact</a></li>
        <li className="activestat"><a href="/mark">Email marketing</a></li>
        <li><a href="/ucamp">Campaign</a></li>
        <li className="rightlogout"><a  href="/login">Logout</a></li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2023 Your Company</p>
      <div className="footer-links">
      <a href="/privacypolicy">Privacy Policy</a> | <a href="/termsandconditions">Terms and Conditions</a> | <a href="/faq">FAQ</a>
      </div>
    </div>
  );
}

function EmailMarketing() {

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <NavigationBar />
      <div className="userhomecontent">
        {/* Removed the h1 and p tags here */}
        <form className="email-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="email-input"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="subject-input"
              placeholder="Enter the email subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="message-input"
              rows="5"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="email-submit-button">Send Email</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default EmailMarketing;
