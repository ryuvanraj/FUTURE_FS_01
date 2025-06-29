import React from 'react';
import SocialLinks from './SocialLinks.jsx';

const Footer = () => (
  <footer>
    <div className="wrapper">
      <p>&copy; {new Date().getFullYear()} Yuvan Raj. All rights reserved.</p>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;