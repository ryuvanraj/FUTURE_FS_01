import React from 'react';
import personalDetails from '../data/personalDetails.jsx';

const Header = () => (
  <header id="welcome-section">
    <div className="moon"></div>
    <div className="silhouette"></div>
    <div className="forest"></div>
    <div className="container">
      <h1>
        <span className="line">{personalDetails.name}</span>
        <span className="line">{personalDetails.title}</span>
        <span className="line">
          <span className="color"></span> {personalDetails.description}
        </span>
      </h1>
      <div className="buttons">
        <a href="#projects">My Works</a>
        <a href="#contact" className="cta">Get in Touch</a>
      </div>
    </div>
  </header>
);

export default Header;