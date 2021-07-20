import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import moveit from '../assets/images/moveit.png';

interface HomeProps {
  handleTheme: () => void;
}

export function Moveit(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="moveit" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <ProjectPage
        title="Move.it"
        description="Plataforma para gestão de tempo e realização de exercícios físicos, desenvolvida durante a NLW (Next Level Week) #4 da @Rocketseat."
        img={moveit}
        techs={["Next.js", "TypeScript", "React", "styled-components"]}
        link="https://github.com/rafaeldiehl/move.it"
      />
      <Footer />
    </Container>
  );
}