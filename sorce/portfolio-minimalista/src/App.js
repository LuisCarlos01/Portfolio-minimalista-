import React from 'react';
import Preloader from './components/Preloader';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <>
      <Preloader />
      <div className="content" id="content">
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
