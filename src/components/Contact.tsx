import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';

import { Container } from '../styles/components/contact';

import emailjs from 'emailjs-com';

export function Contact() {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio-rafael', e.target, 'user_ZqujDnZOI4cAiruDDsWKr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <Container>
      <div className="description">
        <h1>Contato</h1>
      </div>
      <div className="contact-container">
        <form onSubmit={sendEmail}>
          <div className="field-container">
            <input id="name" type="text" name="name" required />
            <label htmlFor="name">Nome</label>
          </div>
          <div className="field-container">
            <input id="email" type="email" name="email" required />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="field-container">
            <input id="phone" type="number" name="phone" required />
            <label htmlFor="phone">Telefone</label>
          </div>
          <div className="field-container">
            <textarea id="message" name="message" cols={20} rows={10} required></textarea>
            <label htmlFor="message">Mensagem</label>
          </div>
          <div className="buttons-container">
            <button type="reset">
              <div className="button-content">
                <span>Limpar dados</span>
                <FaTrashAlt />
              </div>
            </button>
            <button type="submit">
              <div className="button-content">
                <span>Enviar e-mail</span>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}