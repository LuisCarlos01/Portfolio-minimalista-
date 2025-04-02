import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSection } from '../contexts/SectionContext';

const SkillsSection = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { activeSection } = useSection();
  const skillsRef = useRef(null);
  
  const skills = [
    {
      name: "HTML5",
      icon: "fa-brands fa-html5",
      level: 85,
      description: "Desenvolvimento de marcação semântica e acessível para uma melhor estrutura de páginas."
    },
    {
      name: "CSS3",
      icon: "fa-brands fa-css3-alt",
      level: 80,
      description: "Estilização avançada com CSS3, incluindo animações, grid e flexbox para layouts modernos."
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      level: 90,
      description: "Desenvolvimento de aplicações utilizando ES6+, assincronismo, e manipulação avançada do DOM."
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      level: 75,
      description: "Versionamento de código, colaboração em equipe, e integração com CI/CD pipelines."
    },
    {
      name: "Tailwind",
      icon: "fa-brands fa-css3",
      level: 70,
      description: "Criação de interfaces responsivas com utilitários CSS para desenvolvimento ágil."
    },
    {
      name: "Sass",
      icon: "fa-brands fa-sass",
      level: 65,
      description: "Pré-processamento CSS com variáveis, mixins e funções para código mais organizado."
    },
    {
      name: "Node",
      icon: "fa-brands fa-node-js",
      level: 95,
      description: "Desenvolvimento de APIs RESTful, microserviços e integração com bancos de dados."
    },
    {
      name: "React",
      icon: "fa-brands fa-react",
      level: 85,
      description: "Construção de interfaces de usuário com componentes reutilizáveis e gerenciamento de estado."
    },
    {
      name: "Git",
      icon: "fa-brands fa-git-alt",
      level: 80,
      description: "Controle de versão, branches, merges e colaboração em equipes de desenvolvimento."
    }
  ];

  // Efeito para renderizar as skills ao montar o componente
  useEffect(() => {
    console.log("SkillsSection montado");
    
    // Garantir que as barras de progresso sejam inicializadas corretamente
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    progressBars.forEach((bar, index) => {
      const skill = skills[index];
      if (skill) {
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = `${skill.level}%`;
        }, 300);
      }
    });
    
    return () => {
      console.log("SkillsSection desmontado");
    };
  }, []);

  // Observar mudanças na seção ativa
  useEffect(() => {
    console.log(`Seção ativa atual: ${activeSection}`);
    if (activeSection === 'skills') {
      console.log('Seção de skills ativa');
      
      // Mostrar skills quando a seção estiver ativa
      const skillsCards = document.querySelectorAll('.skill-card');
      skillsCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.4, 
            delay: index * 0.1,
            ease: 'power2.out'
          }
        );
      });
    }
  }, [activeSection]);

  // Abrir a modal de preview
  const openPreview = (skill) => {
    console.log(`Abrindo preview para: ${skill.name}`);
    setSelectedSkill(skill);
    setShowPreview(true);
    
    // Animação de abertura da modal
    const modal = document.querySelector('.skill-preview');
    if (modal) {
      gsap.fromTo(
        modal,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  };

  // Fechar a modal de preview
  const closePreview = () => {
    const modal = document.querySelector('.skill-preview');
    if (modal) {
      gsap.to(
        modal,
        { 
          opacity: 0, 
          y: 20, 
          duration: 0.3, 
          ease: 'power2.in',
          onComplete: () => setShowPreview(false)
        }
      );
    } else {
      setShowPreview(false);
    }
  };

  // Fechar ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && showPreview) {
        closePreview();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showPreview]);

  return (
    <div className="skills-section" ref={skillsRef}>
      <h2>Minhas Habilidades</h2>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index} 
            onClick={() => openPreview(skill)}
            tabIndex="0"
            role="button"
            aria-label={`Ver detalhes da habilidade ${skill.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openPreview(skill);
                e.preventDefault();
              }
            }}
            style={{ zIndex: 2 }}
          >
            <div className="skill-icon">
              <i className={skill.icon}></i>
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-level">
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar" 
                  style={{ 
                    width: '0%',
                    transition: 'width 1.5s ease-out',
                    background: 'linear-gradient(90deg, var(--purple-soft) 0%, #8e44ad 100%)'
                  }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
      
      {showPreview && selectedSkill && (
        <div className="skill-preview-overlay">
          <div 
            className="skill-preview" 
            role="dialog" 
            aria-labelledby="skill-preview-title"
            aria-describedby="skill-preview-description"
          >
            <button 
              className="close-preview" 
              onClick={closePreview}
              aria-label="Fechar detalhes da habilidade"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="preview-icon">
              <i className={selectedSkill.icon}></i>
            </div>
            <h3 id="skill-preview-title">{selectedSkill.name}</h3>
            <div className="preview-level">
              <div className="preview-progress">
                <div 
                  className="preview-progress-bar" 
                  style={{ width: `${selectedSkill.level}%` }}
                ></div>
              </div>
              <span>{selectedSkill.level}%</span>
            </div>
            <p id="skill-preview-description">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection; 