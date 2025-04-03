import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSection } from '../contexts/SectionContext';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const { activeSection } = useSection();

  const projects = [
    { 
      id: "project1", 
      title: "Sistema de Gerenciamento", 
      description: "API RESTful para gerenciamento de recursos com autenticação JWT e integração com banco de dados PostgreSQL."
    },
    { 
      id: "project2", 
      title: "Microserviços em Node.js", 
      description: "Arquitetura de microserviços com comunicação via RabbitMQ e Docker Compose para orquestração."
    },
    { 
      id: "project3", 
      title: "API Gateway", 
      description: "Implementação de API Gateway com Express.js oferecendo rate limiting, caching e logging centralizado."
    }
  ];

  // Animação quando a seção de portfólio se torna ativa
  useEffect(() => {
    if (activeSection === 'portfolio') {
      const section = document.getElementById('portfolio');
      if (section) {
        // Animar o título e descrição
        gsap.fromTo(
          section.querySelectorAll('h2, .portfolio-description'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.2 }
        );
        
        // Animar os cards com efeito de stagger
        gsap.fromTo(
          section.querySelectorAll('.portfolio-card'),
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            stagger: 0.2, 
            ease: 'power2.out',
            delay: 0.3
          }
        );
      }
    }
  }, [activeSection]);

  return (
    <div className="portfolio-section">
      <h2>Meu Portfolio</h2>
      <p className="portfolio-description">Aqui estão alguns dos meus projetos de backend mais recentes. Cada projeto demonstra diferentes aspectos das minhas habilidades técnicas.</p>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={project.id}>
            <div 
              className="portfolio-thumbnail loading" 
              id={project.id}
              aria-label={`Imagem do projeto ${project.title}`}
            >
              <div className="loading-message" aria-hidden="true">Em breve...</div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection; 