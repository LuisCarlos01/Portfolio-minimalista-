import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>© 2024 Luís Carlos</span>
        </div>
        <div className="footer-links">
          <a href="/" aria-label="Ir para Home">Home</a>
          <a href="/#about" aria-label="Ir para About">About</a>
          <a href="#skills" aria-label="Ir para Skills">Skills</a>
          <a href="#portfolio" aria-label="Ir para Portfolio">Portfolio</a>
          <a href="#contact-section" aria-label="Ir para Contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/luiz-carlos-vitoriano-neto-56a58321b/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/LuisCarlos01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 