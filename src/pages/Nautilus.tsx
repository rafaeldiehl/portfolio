import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import nautilusCalculus from '../assets/images/nautiluscalculus.png';

interface HomeProps {
  handleTheme: () => void;
}

export function Nautilus(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="nautilus-calculus" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <ProjectPage
        title="Nautilus Calculus"
        description="Projeto de website educacional que visa auxiliar discalcúlicos no ensino de Matemática, desenvolvido como TCC para o curso técnico em Redes de Computadores do IFSP Campus Boituva."
        img={nautilusCalculus}
        techs={["HTML", "JavaScript", "React", "Sass", "Node.js", "Express"]}
        link="https://github.com/rafaeldiehl/nautilus-calculus"
      />
      <Footer />
    </Container>
  );
}