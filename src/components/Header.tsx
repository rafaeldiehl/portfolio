import { Navbar } from './Navbar';
import { Button } from './Button';
import { ScrollWarning } from './ScrollWarning';
import { ContactLinks } from './ContactLinks';

import { Container } from '../styles/components/header';

interface HeaderProps {
  handleTheme: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Navbar handleTheme={props.handleTheme} />
      <main className="flex-container">
        <ScrollWarning />
        <ContactLinks />
        <h1 
          onMouseEnter={() => {
            const cursor = document.querySelector('#cursor');
            cursor?.classList.add('hovered');
          }}
          onMouseLeave={() => {
            const cursor = document.querySelector('#cursor');
            cursor?.classList.remove('hovered');
          }}
        >
          Olá, mundo! <br />
          Meu nome é <br />
          <strong>Rafael Diehl</strong>.
        </h1>
        <p>Um entusiasta de desenvolvimento web focado em JavaScript.</p>
        <a href={process.env.PUBLIC_URL + 'cv.pdf'} target="_blank">
          <Button type="button">
            Baixe meu CV
          </Button>
        </a>
      </main>
    </Container>
  );
}