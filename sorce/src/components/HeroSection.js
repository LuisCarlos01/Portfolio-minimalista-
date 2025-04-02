import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import useTyped from '../hooks/useTyped';
import { gsap } from 'gsap';

const HeroSection = () => {
  const typedElement = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  
  // Usando o hook useTyped para efeito de digitação
  useEffect(() => {
    const typed = new window.Typed(typedElement.current, {
      strings: ["Freelancer", "Backend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Efeito para verificar visibilidade do texto e mostrar/ocultar botão "About me"
  useEffect(() => {
    const checkTextVisibility = () => {
      const developerIntro = document.querySelector('.hero-text');
      const circleButton = document.getElementById('aboutButton');
      
      if (developerIntro && circleButton) {
        const rect = developerIntro.getBoundingClientRect();
        const isNotVisible = rect.bottom < 0 || rect.top > window.innerHeight;

        if (isNotVisible && !isButtonVisible) {
          setIsButtonVisible(true);
          circleButton.style.display = 'flex';
          gsap.fromTo(circleButton, 
            { opacity: 0, scale: 0.5 }, 
            { opacity: 1, scale: 1, duration: 0.4 }
          );
        } else if (!isNotVisible && isButtonVisible) {
          setIsButtonVisible(false);
          gsap.to(circleButton, { 
            opacity: 0, 
            scale: 0.5, 
            duration: 0.4, 
            onComplete: () => {
              circleButton.style.display = 'none';
            }
          });
        }
      }
    };

    // Adicionar event listeners
    window.addEventListener('scroll', checkTextVisibility);
    window.addEventListener('resize', checkTextVisibility);
    
    // Verificar inicialmente
    checkTextVisibility();

    // Limpeza
    return () => {
      window.removeEventListener('scroll', checkTextVisibility);
      window.removeEventListener('resize', checkTextVisibility);
    };
  }, [isButtonVisible]);

  // Função para rolar até a seção hero quando o botão "About me" é clicado
  const scrollToHero = () => {
    const heroHeader = document.querySelector('.hero-header');
    if (heroHeader) {
      heroHeader.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-header">
      <div className="wrapper">
        <Header />

        <div className="container">
          <div className="hero-pic">
            <img src="/images/handsome.png" alt="perfil" />
          </div>
          <div className="hero-text">
            <h5>Hi I'm <span className="input" ref={typedElement}>Freelancer</span></h5>
            <h1>Luís Carlos</h1>
            <p id="passionText">
              Creating robust and efficient backend architectures is not just my profession; It's my passion!
            </p>
            <div className="btn-group">
              <a href="#" className="btn active">Download CV</a>
              <a href="#contact-section" className="btn">Contact</a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/luiz-carlos-vitoriano-neto-56a58321b/?trk=opento_sprofile_topcard" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/LuisCarlos01" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="circlebutton" id="aboutButton" onClick={scrollToHero}>
        <span>About me</span>
      </div>
    </div>
  );
};

export default HeroSection; 