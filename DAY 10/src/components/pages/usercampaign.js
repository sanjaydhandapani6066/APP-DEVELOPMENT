import React from 'react';
import '../../assets/css/userhome.css';
function NavigationBar() {
  return (
    
    <div className="navbar">
      <ul>
        <li ><a  href="/userhome">Home</a></li>
        <li><a href="/userprofile">Profile</a></li>
        <li><a href="/adminlog">Admin </a></li>
        <li ><a href="/contact">Contact</a></li>
        <li ><a href="/mark">Email marketing</a></li>
        <li className="activestat"><a href="/contact">Campaign</a></li>

        <li><a  href="/login">Logout</a></li>
      </ul>
    </div>
  );
}

// Create a Footer component
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

function UserCampaign() {
  return (
    <>
      <NavigationBar />
    <div className="userhomecontent" >
      <div >
      <section className="features">
        <div className="feature">
          <h2>Campaign Management</h2>
          <p>Create and manage marketing campaigns across various channels.</p>
        </div>
        <div className="feature">
          <h2>Content Management</h2>
          <p>Create and organize content for your campaigns.</p>
        </div>
        <div className="feature">
          <h2>Social Media Management</h2>
          <p>Schedule posts, engage with followers, and monitor social media performance.</p>
        </div>
        {/* Add more feature sections */}
      </section>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default UserCampaign;
