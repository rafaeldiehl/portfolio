import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { About } from '../components/About';
import { Cursor } from '../components/Cursor';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Container } from '../styles/pages/home';

interface HomeProps {
  handleTheme: () => void;
}

export function Home(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="home" className={cursor && 'cursorOn'}>
      <GlobalStyle />
      {cursor && <Cursor />}
      <Header handleTheme={props.handleTheme} />
      <About />
      <Footer />
    </Container>
  );
}