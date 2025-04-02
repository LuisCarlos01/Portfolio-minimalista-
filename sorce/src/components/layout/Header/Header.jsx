import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <header>
      <div className="logo clickable" onClick={reloadPage}>
        <span className="copyright">©</span>
        <span className="logo-text">Code by Luís Carlos</span>
      </div>

      <nav>
        <div className={`togglebtn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
        <ul className={`navlinks ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact-section">Contact</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 