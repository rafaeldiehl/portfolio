import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

import { Container } from '../styles/pages/notFound';

interface HomeProps {
  handleTheme: () => void;
}

export function NotFound(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="not-found" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <div className="flex-container">
        <div className="descriptive">
          <h1>404</h1>
          <h2 className="subtitle">Página não encontrada</h2>
          <p className="description">A página que você solicitou não existe, foi removida ou está temporariamente indisponível.</p>
          <Link to="/">
            <Button>
              Retornar à página principal
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  );
}