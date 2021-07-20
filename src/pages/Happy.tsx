import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import happy from '../assets/images/happy.png';

interface HomeProps {
  handleTheme: () => void;
}

export function Happy(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="happy" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <ProjectPage
        title="Happy"
        description="Plataforma que conecta pessoas e orfanatos, desenvolvida durante a NLW (Next Level Week) #3 da @Rocketseat."
        img={happy}
        techs={["HTML", "CSS", "TypeScript", "React", "Node.js", "Express", "SQLite"]}
        link="https://github.com/rafaeldiehl/happy"
      />
      <Footer />
    </Container>
  );
}