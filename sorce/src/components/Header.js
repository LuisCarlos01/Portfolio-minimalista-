import React, { useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const nav = document.querySelector(".navlinks");
    
    if (!isMenuOpen) {
      nav.style.display = 'block';
      gsap.fromTo(nav, 
        { opacity: 0, right: '-100%' }, 
        { opacity: 1, right: '0', duration: 0.5 }
      );
    } else {
      gsap.to(nav, { 
        opacity: 0, 
        right: '-100%', 
        duration: 0.5, 
        onComplete: () => {
          nav.style.display = 'none';
        }
      });
    }
  };

  return (
    <header>
      <div className="logo clickable" onClick={reloadPage}>
        <span className="copyright">©</span>
        <span className="logo-text">Code by Luís Carlos</span>
      </div>

      <nav>
        <div className={`togglebtn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
        <ul className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#skills" className="habilidades-btn">Skills</a></li>
          <li><a href="#contact-section">Contact</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 