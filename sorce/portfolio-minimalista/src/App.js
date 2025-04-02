import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { SectionProvider } from './contexts/SectionContext';
import './styles/style.css';

function App() {
  // Efeito para aplicar estilos iniciais às seções
  useEffect(() => {
    // Garantir que a seção home seja visível inicialmente
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.style.display = 'block';
      homeSection.style.opacity = '1';
    }
    
    // Garantir que as outras seções estejam ocultas inicialmente
    const otherSections = document.querySelectorAll('.section-container:not(#home)');
    otherSections.forEach(section => {
      section.style.display = 'none';
      section.style.opacity = '0';
    });
  }, []);

  return (
    <SectionProvider>
      {/* Skip link para acessibilidade */}
      <a href="#content" className="skip-link">Pular para o conteúdo principal</a>
      
      <Preloader />
      <div className="content" id="content">
        <div id="home" className="section-container">
          <HeroSection />
        </div>
        <div id="skills" className="section-container">
          <SkillsSection />
        </div>
        <div id="portfolio" className="section-container">
          <PortfolioSection />
        </div>
        <div id="contact" className="section-container">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </SectionProvider>
  );
}

export default App;
