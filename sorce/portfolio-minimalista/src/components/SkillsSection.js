import React, { useState } from 'react';
import { gsap } from 'gsap';

const SkillsSection = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [currentSkillInfo, setCurrentSkillInfo] = useState('');

  const skills = [
    { icon: "fa-brands fa-html5", name: "HTML5", description: "Desenvolvimento de páginas web semânticas e acessíveis." },
    { icon: "fa-brands fa-css3-alt", name: "CSS3", description: "Estilização avançada com layout responsivo e animações." },
    { icon: "fa-brands fa-js-square", name: "JavaScript", description: "Programação para interatividade e dinamicidade nas páginas web." },
    { icon: "fa-brands fa-github", name: "GitHub", description: "Controle de versão e colaboração em projetos de desenvolvimento." },
    { icon: "fa-solid fa-file-code", name: "Tailwind", description: "Framework CSS para design responsivo." },
    { icon: "fa-brands fa-sass", name: "Sass", description: "Sass é uma extensão do CSS que facilita a escrita de estilos mais organizados e poderosos." },
    { icon: "fa-brands fa-node", name: "Node", description: "Framework para rodar JavaScript no servidor, criando aplicativos rápidos e escaláveis." },
    { icon: "fa-brands fa-react", name: "React", description: "Biblioteca JavaScript para construir interfaces de usuário interativas." },
    { icon: "fa-brands fa-git-alt", name: "Git", description: "Controle de versão de projetos e arquivos." }
  ];

  const showSkillPreview = (description) => {
    setCurrentSkillInfo(description);
    setIsPreviewVisible(true);
    
    const previewModal = document.querySelector('.skill-preview');
    if (previewModal) {
      previewModal.style.display = 'flex';
      gsap.to(previewModal, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.3, 
        ease: 'power2.inOut' 
      });
    }
  };

  const hideSkillPreview = () => {
    const previewModal = document.querySelector('.skill-preview');
    if (previewModal && isPreviewVisible) {
      gsap.to(previewModal, { 
        opacity: 0, 
        scale: 1, 
        duration: 0.3, 
        ease: 'power2.inOut',
        onComplete: () => {
          previewModal.style.display = 'none';
          setIsPreviewVisible(false);
        }
      });
    }
  };

  return (
    <>
      <div id="skills" className="skills-section">
        <h2>Habilidades</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div 
              className="skill" 
              key={index}
              onMouseEnter={() => showSkillPreview(skill.description)}
              onMouseLeave={hideSkillPreview}
            >
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Preview */}
      <div className="skill-preview" style={{ display: 'none', opacity: 0 }}>
        <div className="preview-content">
          <h3>Detalhes da Habilidade</h3>
          <div className="skill-info">{currentSkillInfo}</div>
          <div className="close-preview" onClick={hideSkillPreview}>Fechar</div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection; 