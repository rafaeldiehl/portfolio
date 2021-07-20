import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import podcastr from '../assets/images/podcastr.png';

interface HomeProps {
  handleTheme: () => void;
}

export function Podcastr(props: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id="podcastr" className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={props.handleTheme} />
      <ProjectPage
        title="Podcastr"
        description="Plataforma para ouvir podcasts, desenvolvida durante a NLW (Next Level Week) #5 da @Rocketseat. "
        img={podcastr}
        techs={["Next.js", "TypeScript", "React", "Sass"]}
        link="https://github.com/rafaeldiehl/podcastr"
      />
      <Footer />
    </Container>
  );
}