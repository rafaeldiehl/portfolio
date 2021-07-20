import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import proffy from '../assets/images/proffy.png';

interface HomeProps {
  handleTheme: () => void;
}

export function Proffy(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="proffy" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <ProjectPage
        title="Proffy"
        description="Plataforma de estudos online, desenvolvida durante a NLW (Next Level Week) #2 da @Rocketseat."
        img={proffy}
        techs={["HTML", "CSS", "TypeScript", "React", "Node.js", "Express", "SQLite", "Knex"]}
        link="https://github.com/rafaeldiehl/proffy"
      />
      <Footer />
    </Container>
  );
}