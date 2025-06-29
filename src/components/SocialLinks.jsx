import React from 'react';

const SocialLinks = () => (
  <div className="social">
    <a href="https://www.linkedin.com/in/yuvan-raj/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/ryuvanraj" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=yuvan.r2005@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      title="Send email via Gmail"
    >
      <i className="fas fa-envelope"></i>
    </a>
  </div>
);

export default SocialLinks;