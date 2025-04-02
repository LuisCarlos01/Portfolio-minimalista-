import React from 'react';

const PortfolioSection = () => {
  const projects = [
    { id: "project1", title: "Projeto 1", description: "Descrição do projeto 1. Aguarde, estamos trabalhando nisso!" },
    { id: "project2", title: "Projeto 2", description: "Descrição do projeto 2. Fique ligado para mais detalhes!" },
    { id: "project3", title: "Projeto 3", description: "Descrição do projeto 3. Estamos finalizando os últimos detalhes!" }
  ];

  return (
    <div id="portfolio" className="portfolio-section">
      <h2>Meu Portfolio</h2>
      <p className="portfolio-description">Esses projetos ainda estão em desenvolvimento. Fique atento!</p>
      <div className="portfolio-container">
        {projects.map(project => (
          <div className="portfolio-card" key={project.id}>
            <div className="portfolio-thumbnail loading" id={project.id}>
              <div className="loading-message">Em breve...</div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection; 