import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { useSection } from '../contexts/SectionContext';

const HeroSection = () => {
  const typedElement = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { showSection } = useSection();
  
  // Usando Typed.js para efeito de digitação
  useEffect(() => {
    if (!typedElement.current) return;
    
    const typed = new Typed(typedElement.current, {
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
              if (circleButton) {
                circleButton.style.display = 'none';
              }
            }
          });
        }
      }
    };

    // Adicionar event listeners
    window.addEventListener('scroll', checkTextVisibility);
    window.addEventListener('resize', checkTextVisibility);
    
    // Verificar inicialmente após um pequeno atraso para garantir que os elementos foram renderizados
    const timeoutId = setTimeout(checkTextVisibility, 100);

    // Limpeza
    return () => {
      window.removeEventListener('scroll', checkTextVisibility);
      window.removeEventListener('resize', checkTextVisibility);
      clearTimeout(timeoutId);
    };
  }, [isButtonVisible]);

  // Função para rolar até a seção hero quando o botão "About me" é clicado
  const scrollToHero = () => {
    showSection('home');
  };

  // Função para Download CV
  const handleDownloadCV = (e) => {
    e.preventDefault();
    // Como o arquivo do CV não está disponível, mostrar um alerta
    alert('O CV estará disponível em breve!');
  };

  // Navegação para contato
  const navigateToContact = (e) => {
    e.preventDefault();
    showSection('contact');
  };

  // Animação inicial para a hero section
  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline.fromTo('.hero-pic', 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    timeline.fromTo('.hero-text h5, .hero-text h1, .hero-text p', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: 'power2.out' }
    );
    
    timeline.fromTo('.btn-group, .social', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="hero-header">
      <div className="wrapper">
        <Header />

        <div className="container">
          <div className="hero-pic">
            <img src="/images/handsome.png" alt="Luis Carlos profile" />
          </div>
          <div className="hero-text">
            <h5>Hi I'm <span className="input" ref={typedElement}>Freelancer</span></h5>
            <h1>Luís Carlos</h1>
            <p id="passionText">
              Creating robust and efficient backend architectures is not just my profession; It's my passion!
            </p>
            <div className="btn-group">
              <a href="#" onClick={handleDownloadCV} className="btn active" aria-label="Download CV">Download CV</a>
              <a href="#contact" onClick={navigateToContact} className="btn" aria-label="Ir para seção de contato">Contact</a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/luiz-carlos-vitoriano-neto-56a58321b/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/LuisCarlos01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="circlebutton" id="aboutButton" onClick={scrollToHero} role="button" tabIndex="0" aria-label="Sobre mim">
        <span>About me</span>
      </div>
    </div>
  );
};

export default HeroSection; 