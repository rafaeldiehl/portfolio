import { Anchor } from './Anchor';

import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';

import { 
  FiMail,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi';

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
    <Container id="contact">
      <div className="descriptive">
        <span>Contato</span>
        <h2>Envie sua mensagem</h2>
        <p>Preencha o formulário a seguir adequadamente e envie-me um e-mail com seus dados
         e mensagem. Responderei assim que possível. Além disso, você pode entrar em contato
         comigo pelos seguintes meios.</p>
        <div className="contact-badges">
          <Anchor href="mailto:rafaeljuliani1984@gmail.com" target="_blank">
            <div className="badge">
              <FiMail />
              E-mail
            </div>
          </Anchor>
          <Anchor href="https://github.com/rafaeldiehl" target="_blank">
            <div className="badge">
              <FiGithub />
              Github
            </div>
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/rafael-juliani-diehl-94317a198/" target="_blank">
            <div className="badge">
              <FiLinkedin />
              Linkedin
            </div>
          </Anchor>
        </div>
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