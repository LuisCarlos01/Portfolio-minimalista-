import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    // Limpar formulário após envio
    setFormData({ name: '', email: '', message: '' });
    // Aqui você pode adicionar lógica para enviar para um servidor, API, etc.
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-form">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
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
            ></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Meus Contatos</h2>
        <p>Email: <a href="mailto:luizcarlosvitorianoneto@gmail.com">luizcarlosvitorianoneto@gmail.com</a></p>
        <p>Telefone: +55 (35) 99708-0310</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/luiz-carlos-vitoriano-neto-56a58321b/?trk=opento_sprofile_topcard">linkedin.com/in/luiz-carlos</a></p>
        <p>GitHub: <a href="https://github.com/LuisCarlos01">github.com/LuisCarlos01</a></p>
      </div>
    </section>
  );
};

export default ContactSection; 