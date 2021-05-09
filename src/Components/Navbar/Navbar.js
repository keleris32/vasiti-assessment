import React from 'react';
import './Navbar.css';
import logo from '../../Images/Vasiti-Logo-black 1.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-bar">
        <img src={logo} alt="Vasiti Logo" />
        <div className="nav-menu">
          <ul>
            <li className="nav-link">ABOUT US</li>
            <li className="nav-link">STORIES</li>
            <li className="nav-link">CONTACT</li>
            <li className="nav-link">LOG IN</li>
          </ul>
          <button>SIGN UP</button>
        </div>
      </div>
      <div className="sub-nav-bar">
        <ul className="sub-nav-menu">
          <li className="nav-link">MARKET PLACE</li>
          <li className="nav-link">WHOLESALE CENTER</li>
          <li className="nav-link">SELLER CENTER</li>
          <li className="nav-link">SERVICES</li>
          <li className="nav-link">INTERNSHIPS</li>
          <li className="nav-link">EVENTS</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
