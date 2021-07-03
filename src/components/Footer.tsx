import { Container } from '../styles/components/footer';

import { RiCopyleftLine } from 'react-icons/ri';

export function Footer() {
  return (
    <Container id="about">
      Copyleft <RiCopyleftLine /> Rafael Diehl.
      <a href="https://github.com/rafaeldiehl" target="_blank">Acesse o repositório</a> com o código fonte. <br />
      Software livre licenciado pela  
      <a href="https://www.gnu.org/licenses/licenses.pt-br.html#GPL" target="_blank">
        Licença Pública Geral GNU.
      </a>
    </Container>
  );
}