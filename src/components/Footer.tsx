import { Container } from '../styles/components/footer';

import { RiCopyleftLine } from 'react-icons/ri';

export function Footer() {
  return (
    <Container>
      <div className="footer-container">
        <div className="flex-container">
          Copyleft <RiCopyleftLine /> Rafael Diehl.
          <a href="https://github.com/rafaeldiehl/portfolio" target="_blank">
            Acesse o repositório
          </a>
          com o código fonte.
        </div>
        <div className="flex-container">
          Software livre licenciado pela  
          <a href="https://www.gnu.org/licenses/licenses.pt-br.html#GPL" target="_blank">
            Licença Pública Geral GNU.
          </a>
        </div>
      </div>
    </Container>
  );
}