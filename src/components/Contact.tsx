import { useState } from 'react';

import { Anchor } from '../components/Anchor';

import InputMask from 'react-input-mask';

import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { Container } from '../styles/components/contact';

import emailjs from 'emailjs-com';

export function Contact() {
  const [isSend, setIsSend] = useState(false);

  function openIsSend() {
    setIsSend(true);
  }

  function closeIsSend() {
    setIsSend(false);
  }

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio-rafael', e.target, 'user_ZqujDnZOI4cAiruDDsWKr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

    openIsSend();
  }

  return (
    <Container id="contact">
      <div className="descriptive">
        <span>Contato</span>
        <h2>Envie sua mensagem</h2>
        <p>Preencha o formulário a seguir adequadamente e envie-me um e-mail com seus dados
         e mensagem. Estou aberto para freelances, de pequeno e médio porte, e responderei assim que possível.</p>
        <p>Você também pode visitar meus perfis no <Anchor href="https://www.linkedin.com/in/rafael-juliani-diehl-94317a198/" target="_blank">
              Linkedin
          </Anchor> e <Anchor href="https://github.com/rafaeldiehl" target="_blank">
              Github
          </Anchor>, ou enviar um e-mail diretamente em <Anchor href="mailto:rafaeljuliani1984@gmail.com" target="_blank">
              rafaeljuliani1984@gmail.com
          </Anchor>.
        </p>
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
            <InputMask mask="+5\5 (99) 99999-9999" required />
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
        {
          isSend && (
            <div className="send-email-alert">
              E-mail enviado com sucesso!
              <button onClick={closeIsSend}>
                <MdClose />
              </button>
            </div>
          )
        }

      </div>
    </Container>
  );
}