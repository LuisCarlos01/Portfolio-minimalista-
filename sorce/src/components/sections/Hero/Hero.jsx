import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import SocialLinks from '../../common/SocialLinks/SocialLinks';
import './Hero.css';
import profileImg from '../../../assets/images/handsome.png';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Freelancer', 'Developer', 'Designer'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="hero-pic">
        <img src={profileImg} alt="perfil" />
      </div>
      <div className="hero-text">
        <h5>Hi I'm <span className="input" ref={typedRef}>Freelancer</span></h5>
        <h1>Luís Carlos</h1>
        <p id="passionText">
          Creating robust and efficient backend architectures is not just my profession; It's my passion!
        </p>
        <div className="btn-group">
          <a href="#" className="btn active">Download CV</a>
          <a href="#contact-section" className="btn">Contact</a>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Hero; 