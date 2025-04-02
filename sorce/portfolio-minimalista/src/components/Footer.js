import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>© 2024 Luís Carlos</span>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact-section">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/luiz-carlos-vitoriano-neto-56a58321b/?trk=opento_sprofile_topcard" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/LuisCarlos01" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 