import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useSection } from '../contexts/SectionContext';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { activeSection } = useSection();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    // Simulando o envio do formulário
    setTimeout(() => {
      console.log('Formulário enviado:', formData);
      // Em uma aplicação real, aqui enviaria para um servidor
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setSubmitMessage('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      
      // Limpar a mensagem após 5 segundos
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  // Animação de entrada quando a seção fica ativa
  useEffect(() => {
    if (activeSection === 'contact') {
      const section = document.getElementById('contact');
      if (section) {
        gsap.fromTo(
          section.querySelectorAll('.animate-item'),
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            stagger: 0.2, 
            duration: 0.7, 
            ease: 'power2.out' 
          }
        );
      }
    }
  }, [activeSection]);

  return (
    <section className="contact-section">
      <div className="contact-form animate-item">
        <h2>Entre em Contato</h2>
        {submitMessage && (
          <div className="submit-message success" role="alert">
            {submitMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} aria-label="Formulário de contato">
          <div className="form-group">
            <label htmlFor="name">Seu Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome" 
              required 
              aria-required="true"
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Seu Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email" 
              required 
              aria-required="true"
              disabled={isSubmitting}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Digite um endereço de email válido"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Sua Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem" 
              required
              aria-required="true"
              disabled={isSubmitting}
              minLength="10"
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>

      <div className="contact-info animate-item">
        <h2>Meus Contatos</h2>
        <p>Email: <a href="mailto:luizcarlosvitorianoneto@gmail.com">luizcarlosvitorianoneto@gmail.com</a></p>
        <p>Telefone: <a href="tel:+5535997080310">+55 (35) 99708-0310</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/luiz-carlos-vitoriano-neto-56a58321b/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer">linkedin.com/in/luiz-carlos</a></p>
        <p>GitHub: <a href="https://github.com/LuisCarlos01" target="_blank" rel="noopener noreferrer">github.com/LuisCarlos01</a></p>
      </div>
    </section>
  );
};

export default ContactSection; 