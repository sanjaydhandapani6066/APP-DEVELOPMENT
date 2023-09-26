import React from 'react';
import '../../assets/css/landingpage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <div className="landcontent">
      <div className="background">
        <h1 className="landing-header">Digital marketing app!</h1>
        <br></br>
        <Link to="/login">
          <button className="explore-button">Explore</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
