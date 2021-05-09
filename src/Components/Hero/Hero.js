import React from 'react';
import './Hero.css';
import img from '../../Images/Testimonial image 1.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-description">
          <h1 className="hero-title">
            Amazing Experiences from Our Wonderful Customers
          </h1>
          <p className="hero-text">
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className="hero-img-con">
          <div className="hero-ellipse" />
          <img className="hero-img" src={img} alt="Satisfied customers" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
