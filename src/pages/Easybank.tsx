import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import easybank from '../assets/images/easybank.png';

interface HomeProps {
  handleTheme: () => void;
}

export function Easybank(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="easybank" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <ProjectPage
        title="Easybank"
        description="Landing page do banco Easybank, desenvolvida como solução de um desafio do Frontend Mentor. "
        img={easybank}
        techs={["HTML", "CSS", "JavaScript", "Sass"]}
        link="https://github.com/rafaeldiehl/easybank-landing-page-master"
      />
      <Footer />
    </Container>
  );
}