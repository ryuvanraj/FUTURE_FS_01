import React from 'react';
import SocialLinks from './SocialLinks.jsx';

const Menu = ({ showMenu, toggleMenu }) => (
  <div className={`menu-container ${showMenu}`}>
    <div className="overlay" onClick={toggleMenu} />
    <div className="menu-items">
      <ul>
        <li><a href="#welcome-section" onClick={toggleMenu}>HOME</a></li>
        <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
        <li><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
        <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
        <li><SocialLinks /></li>
      </ul>   
    </div>
  </div>
);

export default Menu;